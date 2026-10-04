import crypto from "crypto";
import { cookies } from "next/headers";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

const cookieName = "abdullah_admin";
const secret = () => process.env.SESSION_SECRET || "development-only-secret-change-me";
export async function verifyAdmin(email: string, password: string) {
  if (email !== process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD_HASH) return false;
  return bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
}
export function signSession(email: string) {
  const payload = Buffer.from(JSON.stringify({ email, exp: Date.now() + 1000 * 60 * 60 * 8 })).toString("base64url");
  const sig = crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}
function validSession(value?: string) {
  if (!value) return false;
  const [payload, sig] = value.split(".");
  if (!payload || !sig) return false;
  const expected = crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  try { const data = JSON.parse(Buffer.from(payload, "base64url").toString()); return data.exp > Date.now() && data.email === process.env.ADMIN_EMAIL; } catch { return false; }
}
export async function isAdmin() { return validSession((await cookies()).get(cookieName)?.value); }
export async function setSession(email: string) { (await cookies()).set(cookieName, signSession(email), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: 60 * 60 * 8, path: "/" }); }
export async function clearSession() { (await cookies()).delete(cookieName); }
export { cookieName };
