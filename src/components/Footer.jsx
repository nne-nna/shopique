import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    At Gadgety, we’re dedicated to bringing you the latest in technology and gadgets to enhance your everyday life. 
                    Explore, shop, and stay connected with us for unbeatable deals and top-notch customer service. 
                    <br />Your satisfaction is our priority.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'> 
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/about" className="hover:underline">About Us</Link></li>
                    <li><Link to="/delivery" className="hover:underline">Delivery</Link></li>
                    <li><Link to="/policy" className="hover:underline">Policy</Link></li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+234-70-111-222-444</li>
                    <li>contact@gadgety.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ gadgety.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer