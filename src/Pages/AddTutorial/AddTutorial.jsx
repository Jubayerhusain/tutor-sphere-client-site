import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

function AddTutorial() {
  const { user, loading } = useContext(AuthContext);
  const users = useLoaderData();

  // Language options
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Mandarin",
    "Japanese",
    "Korean",
    "Italian",
    "Hindi",
    "Bengali",
    "Arabic",
    "Portuguese",
    "Russian",
    "Urdu",
    "Turkish",
    "Swahili",
  ];

  // Loading or invalid data handling
  if (loading || !users || !Array.isArray(users)) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-dotted"></div>
          <div className="absolute inset-0 h-12 w-12 rounded-full border-4 border-gradient-to-r from-green-400 to-blue-500"></div>
        </div>
      </div>
    );
  }

  // Find the matched user
  const currentUser = users.find((u) => u.email === user?.email) || null;

  const [formData, setFormData] = useState({
    name: user?.displayName || currentUser.name || "",
    email: user?.email || currentUser.email || "",
    image: "",
    language: "",
    price: "",
    description: "",
    review: 0,
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const tutorialData = {
      name: formData.name,
      email: formData.email,
      image: formData.image,
      language: formData.language,
      price: parseFloat(formData.price),
      description: formData.description,
      review: parseFloat(formData.review),
    };
    // console.log(tutorialData);

    fetch(`https://tutor-sphere-server-side.vercel.app/tutors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tutorialData),
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        if (response.ok) {
          Swal.fire({
            title: "Success!",
            text: "Tutorial added successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Success!",
            text: "Tutorial added successfully!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            form.reset();
          });
        }
      })
      .catch((error) => {
        console.error("Error adding Tutorial:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the Tutorial.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-xl mx-auto  rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Add a New Tutorial
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group grid grid-cols-1 gap-3">
            <label className="text-lg font-medium ">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              disabled
              className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div className="form-group grid grid-cols-1 gap-3">
            <label className="text-lg font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your email"
            />
          </div>

          {/* Image */}
          <div className="form-group grid grid-cols-1 gap-3">
            <label className="text-lg font-medium text-gray-600">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter tutorial image URL"
            />
          </div>

          {/* Language Selection */}
          <div className="form-group grid grid-cols-1 gap-3">
            <label className="text-lg font-medium text-gray-600">
              Language
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={(e) =>
                setFormData({ ...formData, language: e.target.value })
              }
              className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select language</option>
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="form-group grid grid-cols-1 gap-3">
            <label className="text-lg font-medium text-gray-600">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter price"
            />
          </div>

          {/* Description */}
          <div className="form-group grid grid-cols-1 gap-3">
            <label className="text-lg font-medium text-gray-600">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter tutorial description"
            />
          </div>

          {/* Review */}
          <div className="form-group grid grid-cols-1 gap-3">
            <label className="text-lg font-medium text-gray-600">Review</label>
            <input
              type="number"
              name="review"
              value={formData.review}
              onChange={(e) =>
                setFormData({ ...formData, review: e.target.value })
              }
              className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Review (default 0)"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r transition duration-300 ease-in-out from-blue-400 to-gray-500 text-white font-semibold rounded-xl hover:from-gray-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Submit Tutorial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTutorial;
