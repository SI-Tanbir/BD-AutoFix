import { ConnectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";




export async function POST(request) {



  try {

    
    // Parse the request body
    const body = await request.json();
    const email=await body.email;
    const password= await body.password
    // Connect to the database
    const db = await ConnectDB();

    

    console.log(email,password)
    //hashing the password
     const saltRounds = 10; // You can adjust this for more security (higher = slower)
     const hashedPassword = await bcrypt.hash(password, saltRounds);
 
    
    //  accumulating data
    const userData = {
      Email: email,
      Password: hashedPassword,
    };



    // Access the "user" collection
    const userCollection = db.collection("user");

    // Insert the data into the collection
   const result = await userCollection.insertOne(userData);

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
