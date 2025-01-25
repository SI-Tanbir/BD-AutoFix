import { ConnectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(response,{params}) {
    


    const db=await ConnectDB()
    const {id}=await params
    const query={'_id':new ObjectId(id)}
    const findData=await db.collection('checkout').findOne(query)
    // console.log(findData)

    return (NextResponse.json(findData))

}



export const POST = async (req, { params }) => {
    try {
      const db = await ConnectDB();
      const data = await req.json(); // Parse incoming request JSON
      const { id } = await params; // Get the ID from the route params
  
      // Ensure ID is valid
      if (!ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
      }
  
      const query = { _id: new ObjectId(id) }; // Find document by _id
      const update = {
        $set: data, // Update document fields with incoming data,
        
       
      };
  
      // Update the document
      const result = await db.collection('checkout').updateOne(query, update,{ upsert: true });
  
      // Check if the update was successful
      if (result.matchedCount === 0) {
        return NextResponse.json({ error: 'No document found with this ID' }, { status: 404 });
      }
  
      return NextResponse.json({
        message: 'Document updated successfully',
        modifiedCount: result.modifiedCount,
      });
    } catch (error) {
      console.error('Error updating document:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  };