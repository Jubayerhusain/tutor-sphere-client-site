import React, { useContext } from "react";
import Bannar from "./../../Components/Bannar/Bannar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import LangCategories from "../../Components/LangCategories/LangCategories";
import Stats from './../../Components/Stats/Stats';
import TopTutors from './../../Components/TopTutors/TopTutors';
import Testimonials from './../../Components/Testimonial/Testimonials';

function Home() {
  const { loading } = useContext(AuthContext);
  const languegesCategory = useLoaderData();
  if (loading || !languegesCategory || !Array.isArray(languegesCategory)) {
    return (
      <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="relative flex items-center justify-center">
          <div class="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-dotted"></div>
          <div class="absolute inset-0 h-12 w-12 rounded-full border-4 border-gradient-to-r from-green-400 to-blue-500"></div>
        </div>
      </div>
    );
  }
  // console.log(languegesCategory);
  return (
    <div className="min-h-screen">
      <Bannar></Bannar>
      <Stats></Stats>
      <LangCategories languegesCategory={languegesCategory}></LangCategories>
      <TopTutors></TopTutors>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
