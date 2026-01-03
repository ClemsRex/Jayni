import React from 'react'

const Hero = () => {
  return (
    <section
      id="Header"
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 text-center text-white sm:px-6 md:px-20 lg:px-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Sweet Moments, Delivered to You
          </h1>

          <p className="mt-4 text-base leading-relaxed sm:text-lg md:text-xl">
            Discover a world of freshly baked cakes and pastries made to order
            and delivered right to your door. Whether you’re celebrating a
            special occasion or treating yourself, our online bakery is here to
            make every moment sweeter.
          </p>

          <div className="mt-8 sm:mt-10">
            <button
              aria-label="View our menu"
              className="rounded bg-[#e2adbe] px-6 py-3 font-medium text-[#7E364E] transition-all duration-300 hover:scale-105 hover:bg-[#c0607e] hover:text-white"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero












// import React from 'react'

// const Hero = () => {
//   return (
//     <section
//       id="Header"
//       className="relative min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/header_img.png')" }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-20 lg:px-32 text-center text-white">
//         <div className="max-w-3xl">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Sweet Moments, Delivered to You
//           </h1>

//           <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
//             Discover a world of freshly baked cakes and pastries made to order
//             and delivered right to your door. Whether you’re celebrating a
//             special occasion or treating yourself, our online bakery is here to
//             make every moment sweeter.
//           </p>

//           <div className="mt-8 sm:mt-10">
//             <button
//               aria-label="View our menu"
//               className="bg-[#e2adbe] text-[#7E364E] font-medium rounded px-6 py-3 hover:bg-[#c0607e] hover:text-white hover:scale-105 transition-all duration-300"
//             >
//               View Menu
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
































// import React from 'react'


// const Hero = () => {
//   return (
//     <section 
//       id="Header"
//       className="min-h-screen bg-cover bg-center relative "
//       style={{ backgroundImage: "url('/header_img.png')" }}
//     >

//       {/* Dark Overlay  */}

//         <div className='absolute inset-0 bg-black/50'></div>


//       {/* Hero Content */}

//       <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-20 lg:px-32 text-white text-center">

        
                          
//         <div className="max-w-3xl ">
//           <h1 className="text-4xl md:text-4xl font-bold text-white">
//             Sweet Moments, Delivered to You
//           </h1>

//           <p className="text-lg md:text-2xl my-4 ">
//             Discover a world of freshly baked cakes and pastries made to order
//             and delivered right to your door. Whether you’re celebrating a
//             special occasion or treating yourself, our online bakery is here to
//             make every moment sweeter.
//           </p>

//           <div className="mt-8 sm:mt-10">
//             <button className=" hover:bg-[#c0607e] hover:text-white bg-[#e2adbe] rounded py-2 px-4 cursor-pointer transition">
//               View Menu
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero








































// import React from 'react'
// import Navbar from '../../Components/Navbar'

// const Hero = () => {
//   return (


//     <div className='min-h-screen mb-4 bg-cover bg-center flex items-center  overflow-hidden relative ' style={{backgroundImage: "url('/header_img.png')"}} id='Header' >

//         {/* <Navbar/>  */}


//         <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
//             <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Sweet Moments, Delivered to You</h2>
//             <p
//             className='space-x-6 mt-16'>Discover a world of freshly baked cakes and pastries made to order and delivered right to your door. Whether you’re celebrating a special occasion or treating yourself, our online bakery is here to make every moment sweeter.</p>
//             <div className='mt-10'>
//                 <button className='border border-[#7E364E] hover:bg-[#7E364E] hover:text-white bg-transparent text-white text-lg rounded-[50px] py-2.5 px-5 cursor-pointer transition'>View Menu 
//                 </button>
//             </div>

//         </div>
      
//     </div>
//   )
// }

// export default Hero
