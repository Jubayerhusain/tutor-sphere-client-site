import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function FindTutors() {
  const { language } = useParams();  // Get category from the URL
  const allTutors = useLoaderData();  // Data passed by the loader
  const [tutors, setTutors] = useState(allTutors || []);

  useEffect(() => {
    if (language) {
      // Filter data based on language if set
      const filteredTutors = allTutors.filter((tutor) => tutor.language === language);
      setTutors(filteredTutors);
    } else if (!allTutors.length) {
      // Fetch the API data if allTutors isn't available
      fetch('https://tutor-sphere-server-side.vercel.app/tutors')
        .then((res) => res.json())
        .then((data) => setTutors(data));
    }
  }, [language, allTutors]);

  return (
    <div className="min-h-[450px] p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        {language ? `Tutors for ${language}` : "All Tutors"}
      </h1>
      <div className="my-14 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 2xl:gap-10">
        {tutors.length > 0 ? (
          tutors.map((tutor) => (
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
                <h2 className="text-md font-semibold">{tutor?.name || "Tutor Name"}</h2>
                <div className="flex flex-col justify-between text-sm text-gray-700 mt-1">
                  <p>🌐 Language: {tutor?.language || "N/A"}</p>
                  <p>💰 {tutor?.price ? `BDT ${tutor.price}` : "Free"}</p>
                  <p>Review: {tutor?.review}</p>
                </div>
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
          ))
        ) : (
          <p>No tutors available.</p>
        )}
      </div>
    </div>
  );
}

export default FindTutors;
