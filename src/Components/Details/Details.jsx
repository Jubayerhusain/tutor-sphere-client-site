import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function Details() {
  const { user } = useContext(AuthContext);
  const tutorial = useLoaderData();
  const { name, email, image, language, price, description, review } = tutorial;

  const hundleBooked = () => {
    if (!user || !user.email) {
      Swal.fire({
        title: "Error!",
        text: "Please log in to book a tutorial.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
  
    const bookingData = {
      ...tutorial,
      userEmail: user.email,
    };
  
    // Axios POST request
    axios
      .post(`https://tutor-sphere-server-side.vercel.app/bookedTutorsPost/`, bookingData)
      .then((response) => {
        // console.log(response);
  
        if (response.status === 200 || response.status === 201) {
          Swal.fire({
            title: "Success!",
            text: "Tutorial booked successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to book the tutorial. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error while booking the tutorial:", error);
        Swal.fire({
          title: "Error!",
          text: "This tutor is already booked",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  

  return (
    <div className="min-h-[420px] p-6 space-y-6 my-14 ">
      <div className="max-w-4xl mx-auto  shadow-md rounded-md overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center p-6 border-b">
          {/* Profile Image */}
          <img
            src={image || "https://via.placeholder.com/150"}
            alt={name || "Tutor"}
            className="w-24 h-24 rounded-full border-2 border-gray-200"
          />

          {/* Name and Language */}
          <div className="ml-6">
            <h1 className="text-2xl font-semibold">{name || "Tutor Name"}</h1>
            <p className=" text-md mt-1">
              🌐 Language: {language || "N/A"}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Details</h2>
          <ul className="space-y-2 ">
            <li>
              <span className="font-medium">Email:</span> {email || "N/A"}
            </li>
            <li>
              <span className="font-medium">Price:</span>{" "}
              {price ? `BDT ${price}` : "Free"}
            </li>
            <li>
              <span className="font-medium">Reviews:</span>{" "}
              {review || "No reviews available"}
            </li>
            <li>
              <span className="font-medium">Description:</span>{" "}
              {description || "No description provided."}
            </li>
          </ul>
        </div>
        <Link>
          <p
            onClick={hundleBooked}
            className="w-full py-3 bg-gradient-to-r text-center transition duration-300 ease-in-out from-blue-400 to-gray-500 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Book Now
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Details;

