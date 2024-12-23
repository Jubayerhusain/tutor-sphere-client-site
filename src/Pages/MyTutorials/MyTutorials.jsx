import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function MyTutorials() {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    if (user && user.email) {
      fetch(
        `https://tutor-sphere-server-side.vercel.app/tutors/email/${user.email}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTutorials(data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err.message);
        });
    }
  }, [user]);

  return (
    <div className="min-h-[420px] p-6 bg-gray-100">
      <h2 className="text-3xl font-extrabold text-start my-8 text-gray-800">
        My Tutorials
      </h2>
      {tutorials.length === 0 ? (
        <div class="flex items-center justify-center h-screen bg-gray-100">
          <div class="relative flex items-center justify-center">
            <div class="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-dotted"></div>
            <div class="absolute inset-0 h-12 w-12 rounded-full border-4 border-gradient-to-r from-green-400 to-blue-500"></div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto my-10">
          <table className="w-full table-auto border-collapse border-gray-300 shadow-lg bg-white rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <th className="p-4 text-left text-sm font-semibold">Image</th>
                <th className="p-4 text-left text-sm font-semibold">Name</th>
                <th className="p-4 text-left text-sm font-semibold">Language</th>
                <th className="p-4 text-left text-sm font-semibold">Price</th>
                <th className="p-4 text-left text-sm font-semibold">
                  Description
                </th>
                <th className="p-4 text-left text-sm font-semibold">Review</th>
                <th className="p-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tutorials.map((tutorial) => (
                <tr
                  key={tutorial._id}
                  className="odd:bg-gray-100  even:bg-gray-200 hover:bg-gray-300"
                >
                  <td className="p-4">
                    <img
                      src={tutorial.image}
                      alt="Tutorial"
                      className="w-20 h-20 rounded-md object-cover border"
                    />
                  </td>
                  <td className="p-4 font-medium text-gray-700">{tutorial.name}</td>
                  <td className="p-4 font-medium text-gray-700">
                    {tutorial.language}
                  </td>
                  <td className="p-4 font-medium text-gray-700">
                    ${tutorial.price}
                  </td>
                  <td className="p-4 text-gray-600">
                    {tutorial.description.slice(0, 70)}...
                  </td>
                  <td className="p-4 text-gray-600">{tutorial.review}</td>
                  <td className="p-4 flex space-x-2">
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                      Delete
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyTutorials;
