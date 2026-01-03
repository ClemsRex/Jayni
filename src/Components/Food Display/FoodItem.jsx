import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { IoIosAdd } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";

const FoodItem = ({id,name,price,description,image}) => {

    const [itemCount,setItemCount] = useState(0)



  return (
    <section id='foodItem' className='flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'>
        <div className='relative'>
            
            <img className='w-full rounded-t-[15px] object-cover' src={image} alt="" />

            {!itemCount
                ?<IoIosAdd
                    onClick={()=>setItemCount(prev=>prev+1)}
                    className='w-8.5 absolute bottom-[15px] right-[15px] rounded-full bg-white  cursor-pointer text-xl shadow-lg'  />
                :<div 
                className='absolute bottom-[15px] right-[15px] flex items-center gap-2 p-1.5 bg-white rounded-full shadow-lg '>
                    <IoRemoveCircleOutline
                    onClick={()=>setItemCount(prev=>prev-1)}
                     className='text-red-600 w-7' />
                    <p>{itemCount}</p>
                    <IoIosAdd
                    onClick={()=>setItemCount(prev=>prev+1)} 
                    className='text-green-600 w-7'/>
                </div>
            }

        </div>
        <div className='p-5'>

            <div className='flex justify-between items-center mb-2.5 '>

                <p className='text-[20px] font-medium ' >{name}</p>
                <img className='w-18' src={assets.rating_starts} alt="" />

            </div>
            <p className='text-[#676767] text-[13px]'>{description}</p>
            <p className='text-[#7E364E] text-[22px] font-medium my-2.5'>${price}</p>

        </div>
      
    </section>
  )
}

export default FoodItem
