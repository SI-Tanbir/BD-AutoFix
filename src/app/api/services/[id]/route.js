import { ConnectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    const { id } =await params; // Extract `id` from route parameters

    // Attempt to parse the ID into an integer
    const idInt = parseInt(id, 10);

    const db = await ConnectDB(); // Connect to the database

    let query;

    // Validate and build the query based on `id` type
    if (ObjectId.isValid(id) && id.length === 24) {
      query = { _id: new ObjectId(id) }; // Use ObjectId for valid ObjectId strings
    } else if (!isNaN(idInt)) {
      query = { _id: idInt }; // Use numeric ID for valid numbers
    } else {
      return NextResponse.json(
        { error: "Invalid ID format. Must be a valid ObjectId or numeric value." },
        { status: 400 }
      );
    }

    const data = await db.collection("services").findOne(query); // Fetch the document

    // If no document is found
    if (!data) {
      return NextResponse.json(
        { error: `No service found with ID: ${id}` },
        { status: 404 }
      );
    }

    return NextResponse.json(data); // Return the found document as JSON
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
