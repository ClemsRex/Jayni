import React, { useState } from 'react'
import MenuHero from './MenuHero'
import MenuProduct from './MenuProduct'
import ExploreMenu from './ExploreMenu'


const Menu = () => {

    const [category,setCategory] = useState("All");

  return (
    <>
      <MenuHero/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <MenuProduct category={category}/>
    </>
  )
}

export default Menu
