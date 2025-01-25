import { ConnectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export async function POST(request) {

    const data=await request.json()

    const db= await ConnectDB()
    const insertingData=await db.collection('checkout').insertOne(data)
    console.log(data)

    return (NextResponse.json(insertingData))
    
}