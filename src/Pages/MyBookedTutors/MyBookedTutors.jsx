import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

function MyBookedTutors() {
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    axios
      .get(`https://tutor-sphere-server-side.vercel.app/booked-tutors`)
      .then((response) => {
        const filteredData = response.data.filter(
          (tutor) => tutor.userEmail === user.email
        );
        setBooked(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching booked tutors:", error);
      });
  }, [user?.email]);

  return (
    <div className="min-h-[520px] p-6">
      <h1 className="text-4xl my-14 font-bold mb-6">
        Booked Tutorials ({booked.length})
      </h1>
      {booked.length === 0 ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="relative flex items-center justify-center">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-dotted"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booked.map((tutor, index) => (
            <div
              key={index}
              className="bg-white flex justify-around shadow-md rounded-lg p-4"
            >
              <img
                src={tutor.image || "https://via.placeholder.com/150"}
                alt={tutor.name || "Tutor"}
                className="w-40 h-40 object-cover rounded-sm mb-4"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {tutor.name || "N/A"}
                </h2>
                <p className="text-lg text-gray-600 mb-2">
                  <strong>Language:</strong> {tutor.language || "N/A"}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                  <strong>Price:</strong> ${tutor.price || "Free"}
                </p>
                <button
                  onClick={() => handleReview(tutor)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const handleReview = (tutor) => {
  toast.success(`You can now review the tutorial: ${tutor.name}`);
};

export default MyBookedTutors;
