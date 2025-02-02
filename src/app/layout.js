"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import AuthProvider from "@/services/AuthProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// export const metadata =use metadata // Make sure it's exported in the layout



export default function RootLayout({ children }) {
  return (
    <html lang="en">

    


  
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <AuthProvider>


        <Navbar></Navbar>


        {children}


        <Footer></Footer>
      </AuthProvider>



      </body>
    </html>
  );
}
