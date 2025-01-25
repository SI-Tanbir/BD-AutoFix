
import { ConnectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"


export  async function POST(req,{params}) {

    
    const {id}=await params;
    const db=await ConnectDB()
    const query={'_id':new ObjectId(id)}
    const data= await db.collection('checkout').deleteOne(query)
    
    console.log(data)


   return NextResponse.json(data)
  }

