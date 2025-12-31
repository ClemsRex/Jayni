import React from 'react'


const Hero = () => {
  return (
    <section 
      className="min-h-screen bg-cover bg-center relative "
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
     

      {/* Hero Content */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-20 lg:px-32 text-white text-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-[72px] font-semibold pt-24 sm:pt-32">
            Sweet Moments, Delivered to You
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Discover a world of freshly baked cakes and pastries made to order
            and delivered right to your door. Whether you’re celebrating a
            special occasion or treating yourself, our online bakery is here to
            make every moment sweeter.
          </p>

          <div className="mt-8 sm:mt-10">
            <button className="border border-[#7E364E] hover:bg-[#7E364E] hover:text-white bg-transparent text-white sm:text-lg rounded-[50px] py-2 sm:py-2.5 px-5 sm:px-6 transition">
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
