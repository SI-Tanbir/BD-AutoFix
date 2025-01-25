'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const { data: session } = useSession(); // Access session data

  const email = session?.user?.email; // Get the user's email from the session
  // console.log(session)
  const [data, setData] = useState([]);

  useEffect(() => {
    if (email) {
      axios
        .post(`http://localhost:3000/api/mybookings/${email}`)
        .then((res) => {
          setData(res.data || []); // Use optional chaining to avoid errors
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [email]);

  console.log(data);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.data?.title || 'N/A'}</td>
              <td>{item.data?.price || 'N/A'}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="ml-4 btn btn-secondary">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
