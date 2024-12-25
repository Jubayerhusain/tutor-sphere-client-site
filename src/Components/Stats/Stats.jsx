import React from "react";

function Stats() {
  // Static Data
  const tutorsCount = 120;
  const reviewsCount = 456;
  const languagesCount = 100; // Set languages count to 100
  const activeUsersCount = 350;

  return (
    <div className=" w-full 2xl:w-10/12 xl:w-11/12 lg:w-11/12 my-16 mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-h-screen overflow-hidden">

      {/* Tutors Count Card */}
      <div className="stat card hover:bg-blue-100/10 hover:shadow-xl shadow-lg p-6 rounded-lg flex flex-col items-center justify-center border border-gray-200">
        <div className="stat-title text-xl font-semibold truncate hover:text-black">Total Tutors</div>
        <div className="stat-value text-3xl font-bold mt-2">{tutorsCount}</div>
        <div className="stat-desc text-sm  mt-2 truncate">Count of all registered tutors</div>
      </div>

      {/* Reviews Count Card */}
      <div className="stat card hover:bg-blue-100/10 hover:shadow-xl  shadow-lg p-6 rounded-lg flex flex-col items-center justify-center border border-gray-200">
        <div className="stat-title text-xl font-semibold truncate">Total Reviews</div>
        <div className="stat-value text-3xl font-bold mt-2">{reviewsCount}</div>
        <div className="stat-desc text-sm text-gray-500 mt-2 truncate">↗︎ 100 (25%) increase in reviews</div>
      </div>

      {/* Languages Count Card */}
      <div className="stat card  hover:bg-blue-100/10 hover:shadow-xl shadow-lg p-6 rounded-lg flex flex-col items-center justify-center border border-gray-200">
        <div className="stat-title text-xl font-semibold truncate">Languages Offered</div>
        <div className="stat-value text-3xl font-bold mt-2">{languagesCount}</div>
        <div className="stat-desc text-sm text-gray-500 mt-2 truncate">Languages count available for courses</div>
      </div>

      {/* Active Users Count Card */}
      <div className="stat card hover:bg-blue-100/10 hover:shadow-xl  shadow-lg p-6 rounded-lg flex flex-col items-center justify-center border border-gray-200">
        <div className="stat-title text-xl font-semibold truncate">Active Users</div>
        <div className="stat-value text-3xl font-bold mt-2">{activeUsersCount}</div>
        <div className="stat-desc text-sm text-gray-500 mt-2 truncate">↗︎ 20 (5%) increase in active users</div>
      </div>

    </div>
  );
}

export default Stats;
