
import { ConnectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server"


export  async function POST(req,{params}) {

    
    const {email}=await params;
    const db=await ConnectDB()
    const query={'email':email}
    const data= await db.collection('checkout').find(query).toArray()
    // console.log(data)

   return NextResponse.json(data)
  }

