import React from 'react';
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import PopularCreators from "../Home/PopularCreators";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8">
        <Hero />
        <Trending />
        <Devotional />
        <PopularCreators />
    </div>
  );
};

export default Home;
