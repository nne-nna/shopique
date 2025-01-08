import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title 
          text1={'CONTACT'}
          text2={'US'}
        />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='' />
          <div className='flex flex-col justify-center items-start gap-4'>
              <p className='font-semibold text-xl text-gray-600'>Our Store</p>
              <p className='text-gray-500'>72 Williams Avenue <br /> Suite 350, Houston, USA.</p>
              <p className='text-gray-500'>Tel:+234 91 6133 8624 <br />Email:gadgety@gmail.com</p>
              <p className='font-semibold text-xl text-gray-600'>Join Our Team</p>
              <p className='text-gray-500'>Explore exciting opportunities to grow with Gadgety. Be part of our journey in shaping the future of tech.</p>
              <button className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact