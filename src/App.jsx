import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Deals from './pages/Deals'
import NewsLetterBox from './components/NewsLetterBox'


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Nav />

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/deals' element={<Deals/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/product/:productId' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/place-order' element={<PlaceOrder/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/deals' element={<Deals />} />

        </Routes>
        <NewsLetterBox />
        <Footer />
    </div>
  )
}

export default App
