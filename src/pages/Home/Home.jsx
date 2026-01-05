import React, { useState } from 'react'
import Hero from './Hero'
import ExploreMenu from '../Menu/ExploreMenu'
import FoodDisplay from '../../Components/Food Display/FoodDisplay';

const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
      <Hero/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    
    </div>
  )
}

export default Home


