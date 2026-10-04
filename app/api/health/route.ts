import { prisma } from "@/lib/prisma";
export async function GET() { try { await prisma.$queryRaw`SELECT 1`; return Response.json({ success:true, status:"healthy", database:"connected" }); } catch { return Response.json({ success:false, status:"degraded", database:"unavailable" }, { status:503 }); } }
