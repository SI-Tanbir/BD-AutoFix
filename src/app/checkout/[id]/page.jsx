'use client'
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {


    e.preventDefault();
    console.log("Form Data:", formData);

    const mergedData={

       ...formData, data
  }
    console.log(mergedData)

     axios.post(`${process.env.NEXTAUTH_URL}/api/checkout`,mergedData)
     .then(res=> console.log(res.data))







  };


  const {id}=useParams()
        const [data,setData]=useState('')

        useEffect(()=>{


            axios.post(`${process.env.NEXTAUTH_URL}/api/services/${id}`)
            .then(res=> setData(res.data))

        },[])

        console.log("checking it out",)


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="fullname"
              placeholder="First Name"
              value={formData.fullname}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
           
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
