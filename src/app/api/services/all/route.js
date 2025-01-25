import { ConnectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"


export  async function GET(req, res) {

    const db=await ConnectDB()
    const data= await db.collection('services').find({}).toArray()
    // console.log(data)

   return NextResponse.json(data)
  }

