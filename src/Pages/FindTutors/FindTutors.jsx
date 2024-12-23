import React from "react";
import { useLoaderData } from "react-router-dom";

function FindTutors() {
  const allTutors = useLoaderData();

  return (
    <div className="min-h-[450px] p-6 space-y-4">
      <div className="my-14 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 2xl:gap-10">
        {allTutors.map((tutor) => (
          <div
            key={tutor?._id}
            className="flex items-center bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={tutor?.image || "https://via.placeholder.com/100"}
                alt={tutor?.name || "Tutor"}
                className="w-16 h-16 rounded-full border-2 border-gray-200"
              />
            </div>

            {/* Details */}
            <div className="ml-4 flex-grow">
              {/* Name & Email */}
              <div className="">
                <h2 className="text-md font-semibold">
                  {tutor?.name || "Tutor Name"}
                </h2>
              </div>

              {/* Language & Price */}
              <div className="flex flex-col justify-between  text-sm text-gray-700 mt-1">
                <p>🌐 Language: {tutor?.language || "N/A"}</p>
                <p>💰 {tutor?.price ? `BDT ${tutor.price}` : "Free"}</p>
                <p>Review {tutor?.review}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-1">
                {tutor?.description
                  ? tutor.description.length > 50
                    ? tutor.description.slice(0, 50) + "..."
                    : tutor.description
                  : "No description provided."}
              </p>
            </div>

            {/* Buttons */}
            <div className="ml-4 flex justify-end flex-col">
              <button className="bg-blue-500 text-white text-sm py-1 px-3 rounded-lg hover:bg-blue-600">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindTutors;
