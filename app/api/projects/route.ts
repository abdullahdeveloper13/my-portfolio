import { prisma } from "@/lib/prisma";
export async function GET() { try { return Response.json({ success:true, data:await prisma.project.findMany({ where:{ featured:true }, orderBy:{ sortOrder:"asc" } }) }); } catch { return Response.json({ success:false,error:{code:"DATABASE_ERROR",message:"Projects unavailable"}},{status:503}); } }
