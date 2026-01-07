import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Login from './Components/LogIn/Login'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>


    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}

      <div>
      <Navbar setShowLogin={setShowLogin}/>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/menu' element={ <Menu/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/placeOrder' element={ <PlaceOrder/> } />

      </Routes>
      </div>

      <Footer/>
      
    </>
  )
}

export default App
