import { ConnectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {



  try {

    
    // Parse the request body
    const body = await request.json();

    // Connect to the database
    const db = await ConnectDB();

    // Access the "user" collection
    const userCollection = db.collection("user");

    // Insert the data into the collection
    const result = await userCollection.insertOne(body);

    // Check the result and send a success message
    if (result.acknowledged) {
      return NextResponse.json({
        message: "User added successfully!",
        insertedId: result.insertedId,
      });
    } else {
      return NextResponse.json(
        { message: "Failed to add user." },
        { status: 500 }
      );
    }
  } catch (error) {


    console.error("Error occurred:", error);

    // Return an error response
    return NextResponse.json(
      { message: "Error adding user", error: error.message },
      { status: 500 }
    );



  }


}
