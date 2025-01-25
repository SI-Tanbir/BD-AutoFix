'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const { data: session } = useSession(); // Access session data
  const email = session?.user?.email; // Get the user's email from the session
  const [data, setData] = useState([]);

  // Function to load data based on email
  const loadEmail = () => {
    if (email) {
      axios
        .post(`${process.env.NEXTAUTH_URL}/api/mybookings/${email}`)
        .then((res) => {
          setData(res.data || []); // Use optional chaining to avoid errors
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  };

  useEffect(() => {
    loadEmail();
  }, [email]);

  // Handle delete request
  const handleDelete = (id) => {
    console.log('Attempting to delete:', id);

    axios
      .post(`${process.env.NEXTAUTH_URL}/api/delete-booking/${id}`)
      .then((res) => {
        if (res.data?.deletedCount > 0) {
          console.log('Delete successful, reloading data...');
          loadEmail(); // Reload data after a successful delete
        } else {
          console.error('Failed to delete item.');
        }
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table header */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.data?.title || 'N/A'}</td>
              <td>{item.data?.price || 'N/A'}</td>
              <td>
                <Link href={`my-bookings/update/${item._id}`} className="btn btn-primary" >Edit</Link>
                <button
                  className="ml-4 btn btn-secondary"
                  onClick={() => handleDelete(item?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
