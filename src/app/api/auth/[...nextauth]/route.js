import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Replace with your database logic

        return true
        // if (email === "shafiktanbir@gmail.com" && password === "123456") {
        //   return { id: 1, name: "Test User", email };
        // }
        // return null;
      },
    }),
  ],
  pages:{
signIn:'/login',
  },
  secret: process.env.PUBLIC_NEXT_SECRET, // Add this in your .env.local file
});

export { handler as GET, handler as POST };
