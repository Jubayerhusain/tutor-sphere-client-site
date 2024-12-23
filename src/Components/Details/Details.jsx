import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Details() {
  const tutorial = useLoaderData(); // Fetch data passed via loader
  const { name, email, image, language, price, description, review } = tutorial; // Destructure tutorial data

  return (
    <div className="min-h-[420px] p-6 space-y-6 my-14 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
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
            <p className="text-gray-500 text-md mt-1">
              🌐 Language: {language || "N/A"}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Details</h2>
          <ul className="space-y-2 text-gray-700">
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
          <p className="w-full py-3 bg-gradient-to-r text-center transition duration-300 ease-in-out from-blue-400 to-gray-500 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-400">
            Booked Now{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Details;
