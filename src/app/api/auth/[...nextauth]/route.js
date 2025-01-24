import { ConnectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { rule } from "postcss";

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


        if (!email || !password){
          return null;
        }
        if(email){

          const db=await ConnectDB()
          const coll=await db.collection('user').findOne({"Email":email})

          console.log("testing ",coll)
          
          if(!coll){
            return null
          }

          const passwordMatched= bcrypt.compareSync(password,coll.Password)

          if(!passwordMatched){
            return null
          }

          return coll;

        }
        // // Connect to the database
        // const db = await ConnectDB();
        // const userCollection = db.collection("user");
        
        // // Find the user by email
        // const user = await userCollection.findOne({ email });


        // console.log("getting credincial from signin",email)


        // console.log(typeof user)


        // if (!user) {
        //   throw new Error("No user found with the entered email");
        // }

        // // Compare the provided password with the hashed password in the database
        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //   throw new Error("Invalid credentials");
        // }

        // // Return user object upon successful validation
        // return {
        //   id: user._id.toString(),
        //   name: user.name,
        //   email: user.email,
        // };


      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
