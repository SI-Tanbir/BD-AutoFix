'use client';
import axios, { Axios } from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const InputForm = () => {
  const { id } = useParams(); // Get ID from URL params

  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    email: '',
    updateData: '',
    date: '',
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(inputs); // Update state with submitted data

      axios.post(`http://localhost:3000/my-bookings/update/api/${id}`,inputs)
      .then(res=>console.log(res.data))
  };

  // Fetch data on mount
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/my-bookings/update/api/${id}`)
        .then((res) => {
          setInputs({
            name: res.data?.fullname || '',
            phone: res.data?.phone || '',
            email: res.data?.email || '',
           
            date: res.data?.date || '',
          });
        })
        .catch((err) => console.error('Error fetching data:', err));
    }
  }, [id]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold underline mb-4">Update My Bookings Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={inputs.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your email"
          />
        </div>
      
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Date</label>
          <input
            type="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Show Input Details
        </button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-100">
          <h2 className="font-semibold mb-2">Submitted Details:</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Phone Number:</strong> {submittedData.phone}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Update Data:</strong> {submittedData.updateData}
          </p>
          <p>
            <strong>Date:</strong> {submittedData.date}
          </p>
        </div>
      )}
    </div>
  );
};

export default InputForm;
