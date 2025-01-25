import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (request) => {
  // Retrieve the token from cookies
  const token = cookies().get("next-auth.session-token");

  // Redirect to the login page if the token does not exist
  if (!token) {
    console.log("token is note here")
    return NextResponse.redirect(new URL("/login", request.url));
  }

  console.log("Middleware check passed");
  return NextResponse.next();
};

export const config = {
  matcher: ["/my-bookings/path/:path*"], // Correct matcher syntax for dynamic paths
};
