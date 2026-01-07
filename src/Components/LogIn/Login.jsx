import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const Login = ({setShowLogin}) => {
    
    const [currentState,setCurrentState] = useState("Sign Up")

  return (
    <section className=''>
        <form className=''>
            <div className=''>
                <h2>{currentState}</h2>
                <IoClose onClick={()=>setShowLogin(false) }/>
            </div>
        </form>
    
    </section>
  )
}

export default Login
