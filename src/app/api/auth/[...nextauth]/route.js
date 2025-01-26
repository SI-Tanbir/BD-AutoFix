import { ConnectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Email and Password are required");
        }

        // Connect to the database and verify the user
        const db = await ConnectDB();
        const user = await db.collection("user").findOne({ Email: email });

        if (!user) {
          throw new Error("User not found");
        }

        // Compare the hashed password
        const passwordMatched = bcrypt.compareSync(password, user.Password);
        if (!passwordMatched) {
          throw new Error("Invalid credentials");
        }

        // Return user data for the session
        return {
          id: user._id.toString(),
          email: user.Email,
          name: user.Name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom sign-in page
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Use JSON Web Tokens for sessions
    maxAge: 24 * 60 * 60, // 24 hours session duration
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user info to the token on login
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Add token data to the session
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
