"use client"
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../(components)/Navbar";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { signIn } from "next-auth/react";


const page = () => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);
      // Add your login logic here (e.g., API call)

      const result = await signIn("credentials", {
        email,
        password,
         // Prevent automatic redirect
      });

    };



  return (

<div>




<div className="flex bg-slate-100">
      <div className="w-[50%]">{/* left side  */}

      <Image src={'/assets/images/login/login.svg'} width={600} height={500} alt='login image' />

      </div>

 

      <div className="w-[50%] ">
        {/* right side */}

        <div className=" ">
          <div className="w-full max-w-sm p-20 broder border-4 bg-white rounded-lg shadow-lg shadow-slate-700 " >
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">
              Login here
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Login
              </button>
            </form>
        <div>
          <p>
            Or Sign In with
          </p>
          <div className="flex gap-8">
            {/* icon here */}

            <FaFacebook className="text-4xl bg-blue-500 rounded-2xl" />
            <FaGoogle className="text-4xl bg-blue-500 rounded-2xl" />
            <FaGithub className="text-4xl  rounded-2xl" />


          </div>

          <p>Have an account? <span className="text-orange-600">Sign In</span></p>
        </div>



          </div>
        </div>
      </div>



    </div>

</div>

  );
};

export default page;
