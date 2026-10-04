import { prisma } from "@/lib/prisma";
export async function GET() { try { return Response.json({ success:true, data:await prisma.technology.findMany({ orderBy:{ sortOrder:"asc" } }) }); } catch { return Response.json({ success:false,error:{code:"DATABASE_ERROR",message:"Technologies unavailable"}},{status:503}); } }
