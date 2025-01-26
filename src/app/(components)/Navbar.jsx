"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession(); // Fetch session on the client

  const nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#aboutus" },
    { name: "Services", path: "/#service" },
    // { name: "Blog", path: "/" },
    { name: "Contact", path: "/#contact" },
    
  ];

  return (


    <div className="navbar bg-[#18bd62] text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">BD AutoFix</a>
      </div>
      <div className="flex-none">
        <ul className="flex gap-14 mr-2">
          {nav.map((item) => (
            <li
              className="px-4 py-2 rounded-xl hover:text-white hover:bg-orange-500"
              key={item.name}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}

          {/* Conditionally render Login/Logout based on session */}
          {session ? (
            <>
                <li className="mt-2" ><Link href={'/my-bookings'}>My Bookings</Link></li>

            <li
              className="px-4 py-2 rounded-xl hover:text-white hover:bg-orange-500"
              onClick={() => signOut()}
            >
              Logout
            </li>
          

            </>


            
          ) : (
            <li
              className="px-4 py-2 rounded-xl hover:text-white hover:bg-orange-500"
            >
              <Link href="/login">Login</Link>
            </li>
          )}

        </ul>
        <button className="btn btn-outline text-orange-900 hover:bg-orange-700">
          Book Appointment
        </button>
      </div>
    </div>



  );
};

export default Navbar;
