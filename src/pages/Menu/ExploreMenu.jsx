import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <section id='menu' className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4 '>
            {/* <h2 className='text-3xl font-bold text-center mb-8'>Explore Our Menu</h2> */}

                
            <div className="mx-0 my-5 flex gap-8 overflow-x-auto overflow-y-hidden justify-start lg:justify-center text-center scrollbar-hide">
                

                {menu_list.map((item, index)=>{
                    const isActive = category === item.menu_name


                    return (
                        <div
                            key={index} 
                            onClick={()=> 
                            setCategory(prev =>
                            prev === item.menu_name ? "All" : item.menu_name)}  >


                            <img
                                src={item.menu_image} alt=""
                                className={`w-20 min-w-20 cursor-pointer rounded-full transition-all duration-300   
                                    ${
                                        isActive
                                        ? 'scale-110 ring-2 ring-[#7E364E]'
                                        : 'hover:scale-105'
                                    }`}  />

                                


                            {/* <p className='mt-2.5 text-gray-600 text-[1.4vw] cursor-pointer'>{item.menu_name}</p> */}
                            <p 
                                className={`mt-2 text-sm sm:text-base transition-colors
                                    ${
                                        isActive ? 'text-[#7E364E] font-medium' : 'text-gray-600'
                                    }`}
                                >
                                    {item.menu_name}
                            </p>

                        </div>
                    )
                })}
            </div>

            <hr className='my-2.5 h-0.5 bg-[#e2e2e2] border-none' />

        </div>
      
    </section>
  )
}

export default ExploreMenu





































            {/* <div className='flex justify-center gap-x-4 gap-y-2 mb-8 flex-wrap'>
                <button className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>All</button>
                <button className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Cakes</button>
                <button className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Cupcakes</button>
                <button className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Cookies</button>
                <button className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Milkshakes</button>
                <button className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Other</button>
            </div> */}