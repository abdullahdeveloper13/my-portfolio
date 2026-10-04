import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validation";

const resendEndpoint = "https://api.resend.com/emails";

async function sendResendEmail(payload: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return response.ok;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) return Response.json({ success: false, error: { code: "VALIDATION_ERROR", message: "Please check the form fields." } }, { status: 400 });

    const recent = await prisma.contactMessage.count({ where: { email: parsed.data.email, createdAt: { gt: new Date(Date.now() - 60 * 60 * 1000) } } });
    if (recent >= 3) return Response.json({ success: false, error: { code: "RATE_LIMITED", message: "Please wait before sending another message." } }, { status: 429 });

    const message = await prisma.contactMessage.create({ data: parsed.data });
    const ownerEmail = process.env.CONTACT_EMAIL || "rafayhameed42@gmail.com";
    const from = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
    const subject = `Portfolio enquiry: ${parsed.data.subject}`;
    const details = `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nSubject: ${parsed.data.subject}\n\n${parsed.data.message}`;

    if (process.env.RESEND_API_KEY) {
      await Promise.allSettled([
        sendResendEmail({ from, to: [ownerEmail], reply_to: parsed.data.email, subject, text: details }),
        sendResendEmail({ from, to: [parsed.data.email], subject: "We received your message", text: `Hi ${parsed.data.name},\n\nThanks for reaching out. We received your message and will get in contact shortly.\n\nYour message:\n${parsed.data.message}\n\n— Abdullah Abdul Hameed` }),
      ]);
    }

    return Response.json({ success: true, data: { id: message.id } }, { status: 201 });
  } catch {
    return Response.json({ success: false, error: { code: "SERVER_ERROR", message: "Unable to send your message right now." } }, { status: 500 });
  }
}
