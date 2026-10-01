import { NextResponse } from 'next/server';
export async function POST(req:Request){
  const body=await req.json().catch(()=>null);
  if(!body?.name || !body?.email || !body?.message) return NextResponse.json({error:'Missing required fields'},{status:400});
  // Production: connect this endpoint to Resend, Postmark, HubSpot, or your CRM.
  return NextResponse.json({ok:true});
}
