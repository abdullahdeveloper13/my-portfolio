import { isAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
export async function GET(){if(!(await isAdmin()))return Response.json({success:false,error:{code:"UNAUTHORIZED",message:"Authentication required"}},{status:401});const [projects,technologies,experience,unread]=await Promise.all([prisma.project.count(),prisma.technology.count(),prisma.experience.count(),prisma.contactMessage.count({where:{status:"NEW"}})]);return Response.json({success:true,data:{projects,technologies,experience,unread}})}
