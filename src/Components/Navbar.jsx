import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const leftPositionForMobileMenu = isOpen ? 'left-0' : 'left-[-150%]'

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <img src={assets.logo} alt="Bakery logo" className="w-40" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-x-6">
            <li><Link className="hover:text-[#7E364E]" to="/">Home</Link></li>
            <li><Link className="hover:text-[#7E364E]" to="/menu">Menu</Link></li>
            <li><Link className="hover:text-[#7E364E]" to="/about">About Us</Link></li>
            <li><Link className="hover:text-[#7E364E]" to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block rounded bg-[#e2adbe] px-4 py-2 transition hover:bg-[#c0607e] hover:text-white">
          Sign In
        </button>

        {/* Mobile Icons */}
        {!isOpen ? (
          <GiHamburgerMenu
            size={30}
            className="cursor-pointer md:hidden"
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <IoClose
            size={30}
            className="z-50 cursor-pointer md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 z-40 ${leftPositionForMobileMenu} h-screen w-screen bg-black/40 transition-all duration-700 ease-in-out`}
      >
        <div className="flex min-h-screen w-[80%] flex-col items-center justify-center gap-6 bg-[#7E364E] text-white">
          <nav>
            <ul className="flex flex-col gap-y-4 text-lg">
              <li><Link onClick={() => setIsOpen(false)} to="/">Home</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/menu">Menu</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/about">About Us</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/contact">Contact Us</Link></li>
            </ul>
          </nav>

          <button className="rounded bg-[#e2adbe] px-5 py-2 text-black transition hover:bg-[#c0607e]">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

















// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { IoClose } from 'react-icons/io5';



// const Navbar = () => {


//   const [isOpen, setIsOpen] = useState(false);

//   const leftPositionForMobileMenu = isOpen ? "left-0" : "left-[-150%]";

//   return (

  
//     //header section 


//     <header className='bg-white shadow sticky top-0  z-10 '>

//       <div className='container mx-auto py-3 px-4 flex justify-between items-center '>

//         {/* logo section */}
        
//         <img src={assets.logo} alt="" className="w-40" />

//         {/* navbar section */}
      
//       <nav className='md:flex gap-x-4 hidden '>
//         <ul className='flex gap-x-4'>
//           <li><Link className="hover:text-[#7E364E]" to={'/header'}> Home </Link></li>

//           <li><Link className="hover:text-[#7E364E]" to={'/menu'}> Menu </Link></li>
          
//           <li><Link className="hover:text-[#7E364E]" to={'/mobile-app'}> Mobile-App </Link></li>
          
//           <li><Link className="hover:text-[#7E364E]" to={'/contact'}> Contact us </Link></li>
//         </ul>
//       </nav>

//       {/* mobileMenu functionality section */}

//       {!isOpen && (
//         <div onClick={() => setIsOpen(true)} 
//         className='flex md:hidden cursor-pointer'>
//           <GiHamburgerMenu size={30}/>
//         </div>
//       )}
//       {isOpen && (
//         <div onClick={() => setIsOpen(false)} 
//           className='flex md:hidden z-50 cursor-pointer'>
//           <IoClose size={30}/>
//         </div>
//       )}

//       <div className={`fixed z-40 top-0 ${leftPositionForMobileMenu} h-screen w-screen transition-all duration-800 ease-in-out bg-black/40`}
//       >

//       <div className='bg-[#7E364E] w-[80%] flex justify-center items-center min-h-screen overflow-y-auto py-3 flex-col gap-4'>



//         <nav>
//         <ul className='flex flex-col gap-y-4 justify-center text-white'>
//           <li><Link 
//           onClick={() => setIsOpen(false)}
//           className="hover:text-[#e7c8d2] cursor-pointer" to={'/header'}> Home </Link></li>

//           <li><Link 
//           onClick={() => setIsOpen(false)}
//           className="hover:text-[#e7c8d2] cursor-pointer" to={'/menu'}> Menu </Link></li>
          
//           <li><Link 
//           onClick={() => setIsOpen(false)}
//           className="hover:text-[#e7c8d2] cursor-pointer" to={'/mobile-app'}> Mobile-App </Link></li>
          
//           <li><Link 
//           onClick={() => setIsOpen(false)}
//           className="hover:text-[#e7c8d2] cursor-pointer" to={'/contact'}> Contact us </Link></li>
//         </ul>
//       </nav>

//       <button className='border hover:bg-[#c0607e] hover:text-black bg-[#e2adbe] rounded py-2 px-4 cursor-pointer transition '>
//           Sign In
//         </button>

//       </div>

//       </div>

      
//         {/* button section */}

//         <button className=' hover:bg-[#c0607e] hover:text-white bg-[#e2adbe] rounded py-2 px-4 cursor-pointer transition md:block hidden'>
//           Sign In
//         </button>
//       </div>
//       {/* </div> */}
//     </header>
//   );
// }

// export default Navbar;


































//  onClick={() => setMenu("Home")} 
//             className={`cursor-pointer pb-0.5 border-b-2 hover:text-[#7E364E] ${
//               menu === "Home" ? "text-[#7E364E] border-b-[#7E364E] font-bold" : "border-b-transparent"
//             }`}











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

//         className={`${menu==="Home"?"active":""}  hover:text-[#7E364E] border-b-2 pb-0.5`} >

//         Home</li>

//         <li 
        
//         onClick={()=>setMenu("Menu")} 

//         className={`${menu==="Menu"?"active":""}  hover:text-[#7E364E] border-b-2 pb-0.5`} >
          
//         Menu</li>

//         <li 
        
//         onClick={()=>setMenu("Mobile-App")} 

//         className={`${menu==="Mobile-App"?"active":""}  hover:text-[#7E364E] border-b-2 pb-0.5`} >
        
//         Mobile-App</li>
//         <li
        
//         onClick={()=>setMenu("Contact Us")} 

//         className={`${menu==="Contact Us"?"active":""}  hover:text-[#7E364E] border-b-2 pb-0.5`} >
          
//         Contact Us</li>

//       </ul>

//       <div className='flex items-center gap-10'>
//         <img src={assets.search_icon} alt="" />

//         <div className='navbar-search-icon'> 
//           <img src={assets.basket_icon} alt="" />

//           <div className='dot'></div>
//         </div>

//         <button className='border border-red-500 hover:bg-[#7E364E] hover:text-white bg-transparent text-gray-500 text-lg rounded-[50px] py-2.5 px-5 cursor-pointer transition '>Sign In</button>

//       </div>
      
//     </div>
//   )
// }

// export default Navbar

