import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../../Components/Food Display/FoodItem'

const MenuProduct = ({category}) => {
    
     const {food_list} = useContext(StoreContext)

  return (


        <section id='food-display' className=' px-5 bg-gray-200'>
            <div>

                {/* <h2 className='text-2xl font-medium text-center mb-8 pt-7'>Our Signature Bites </h2> */}

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7.5 gap-6'>
                    {food_list.map((item,index)=>{
                        if (category === "All" || category===item.category) {
                            return <FoodItem 
                        key={index} 
                        id={item._id} 
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                        image={item.image} />
                        }
                        
                    })}
                </div>
            </div>
        </section>
      
    
  )
}

export default MenuProduct
