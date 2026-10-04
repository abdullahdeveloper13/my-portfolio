import { verifyAdmin,setSession } from "@/lib/auth";
export async function POST(req:Request){const b=await req.json().catch(()=>({})); if(!b.email||!b.password||!(await verifyAdmin(b.email,b.password)))return Response.json({success:false,error:{code:"UNAUTHORIZED",message:"Invalid credentials"}},{status:401}); await setSession(b.email); return Response.json({success:true});}
