import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

function MyTutorials() {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (user && user.email) {
      axiosSecure
        .get(`/tutors/email/${user.email}`)
        .then((res) => setTutorials(res.data));
    }
  }, [user, user.email]);

  const hundleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tutor-sphere-server-side.vercel.app/tutorial/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setTutorials(
                tutorials.filter((tutorial) => tutorial._id !== _id)
              );
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch(() => Swal.fire("Error!", "Something went wrong.", "error"));
      }
    });
  };

  return (
    <div className="min-h-[420px] p-6 ">
      <h2 className="text-3xl font-extrabold text-start my-8 ">My Tutorials</h2>
      {tutorials.length === 0 ? (
        <div class="flex items-center justify-center h-screen ">
          <div class="relative flex items-center justify-center">
            <div class="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-dotted"></div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto my-10">
          <table className="w-full table-auto border-collapse border-gray-300 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <th className="p-4 text-left text-sm font-semibold">Image</th>
                <th className="p-4 text-left text-sm font-semibold">Name</th>
                <th className="p-4 text-left text-sm font-semibold">
                  Language
                </th>
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
                  className=" hover:bg-blue-50"
                >
                  <td className="p-4">
                    <img
                      src={tutorial.image}
                      alt="Tutorial"
                      className="w-20 h-20 rounded-md object-cover border"
                    />
                  </td>
                  <td className="p-4 font-medium ">{tutorial.name}</td>
                  <td className="p-4 font-medium ">{tutorial.language}</td>
                  <td className="p-4 font-medium ">${tutorial.price}</td>
                  <td className="p-4 text-gray-600">
                    {tutorial.description.slice(0, 70)}...
                  </td>
                  <td className="p-4 text-gray-600">{tutorial.review}</td>
                  <td className="p-4 flex space-x-2">
                    <Link
                      onClick={() => hundleDelete(tutorial._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Delete
                    </Link>
                    <Link
                      to={`/updateTutorial/${tutorial._id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Update
                    </Link>
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
