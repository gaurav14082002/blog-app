import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Hero from "../Home/Hero";
import Trending from "../Home/Trending"
import Devotional from "../Home/Devotional"
import PopularCreators from "../Home/PopularCreators"

const Home = () => {
  return (
    <div>
       <Hero/>
       <Trending/>
       <Devotional/>
       <PopularCreators/>
    </div>
  )
}

export default Home
