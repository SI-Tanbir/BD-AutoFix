import { NextResponse } from "next/server";

export async function GET(request) {

  return Response.json({"message":"hello this is my testing api"})
}