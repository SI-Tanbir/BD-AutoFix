'use client'
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'




const CarServicePage = () => {

        const {id}=useParams()
        const [data,setData]=useState('')
        useEffect(()=>{


            axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/services/${id}`)
            .then(res=> setData(res.data))

        },[])
      
        

        // console.log(data)


  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">{data.title}</h1>
        <p className="text-gray-600 mt-2">
          {data.description}
        </p>
      </div>

   
      {/* Sidebar Section */}
      <div className="md:flex md:space-x-6">
        {/* Download Section */}
       

      

        {/* Pricing Section */}
        <div className="bg-white p-6 shadow-md rounded-lg md:w-1/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Price</h3>
          <p className="text-2xl font-bold text-gray-800 mb-4">{data.price} $</p>
          <Link href={`/checkout/${data._id}`} className="w-full bg-orange-500 text-white p-2 rounded-lg">
            Proceed Checkout
          </Link>
        </div>
      </div>

     
    </div>
  );
};

export default CarServicePage;
