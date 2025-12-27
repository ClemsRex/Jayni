
import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='flex justify-between items-center py-3 md:py-3'>
      <img src={assets.logo} alt="" className="w-40" />

      <ul className='flex gap-5 text-[#49557e] text-lg font-[Outfit]'>
        <li 
          onClick={() => setMenu("Home")} 
          className={`cursor-pointer pb-0.5 border-b-2 hover:text-[#cf3333] ${
            menu === "Home" ? "text-[#cf3333] border-b-[#cf3333] font-bold" : "border-b-transparent"
          }`}
        >
          Home
        </li>
        <li 
          onClick={() => setMenu("Menu")} 
          className={`cursor-pointer pb-0.5 border-b-2 hover:text-[#cf3333] ${
            menu === "Menu" ? "text-[#cf3333] border-b-[#cf3333] font-bold" : "border-b-transparent"
          }`}
        >
          Menu
        </li>
        <li 
          onClick={() => setMenu("Mobile-App")} 
          className={`cursor-pointer pb-0.5 border-b-2 hover:text-[#cf3333] ${
            menu === "Mobile-App" ? "text-[#cf3333] border-b-[#cf3333] font-bold" : "border-b-transparent"
          }`}
        >
          Mobile-App
        </li>
        <li 
          onClick={() => setMenu("Contact Us")} 
          className={`cursor-pointer pb-0.5 border-b-2 hover:text-[#cf3333] ${
            menu === "Contact Us" ? "text-[#cf3333] border-b-[#cf3333] font-bold" : "border-b-transparent"
          }`}
        >
          Contact Us
        </li>
      </ul>

      <div className='flex items-center gap-10'>
        <img src={assets.search_icon} alt="" />

        <div className='relative'> 
          <img src={assets.basket_icon} alt="" />
          <div className='absolute min-w-2.5 min-h-2.5 bg-[#cf3333] rounded-md'></div>
        </div>

        <button className='border border-red-500 hover:bg-[#cf3333] hover:text-white bg-transparent text-gray-500 text-lg rounded-[50px] py-2.5 px-5 cursor-pointer transition'>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;














































// import React, { useState } from 'react'
// import { assets } from '../assets/assets'


// const Navbar = () => {

//   const [menu,setMenu] = useState("Home")


//   return (
//     <div className='flex justify-between items-center py-3 md:py-3'>
//       <img src={assets.logo} alt="" className=" w-40"/>

//       <ul className='flex gap-5 text-[#49557e] text-lg font-[Outfit] '>
//         <li 

//         onClick={()=>setMenu("Home")} 

//         className={`${menu==="Home"?"active":""}  hover:text-[#cf3333] border-b-2 pb-0.5`} >

//         Home</li>

//         <li 
        
//         onClick={()=>setMenu("Menu")} 

//         className={`${menu==="Menu"?"active":""}  hover:text-[#cf3333] border-b-2 pb-0.5`} >
          
//         Menu</li>

//         <li 
        
//         onClick={()=>setMenu("Mobile-App")} 

//         className={`${menu==="Mobile-App"?"active":""}  hover:text-[#cf3333] border-b-2 pb-0.5`} >
        
//         Mobile-App</li>
//         <li
        
//         onClick={()=>setMenu("Contact Us")} 

//         className={`${menu==="Contact Us"?"active":""}  hover:text-[#cf3333] border-b-2 pb-0.5`} >
          
//         Contact Us</li>

//       </ul>

//       <div className='flex items-center gap-10'>
//         <img src={assets.search_icon} alt="" />

//         <div className='navbar-search-icon'> 
//           <img src={assets.basket_icon} alt="" />

//           <div className='dot'></div>
//         </div>

//         <button className='border border-red-500 hover:bg-[#cf3333] hover:text-white bg-transparent text-gray-500 text-lg rounded-[50px] py-2.5 px-5 cursor-pointer transition '>Sign In</button>

//       </div>
      
//     </div>
//   )
// }

// export default Navbar

