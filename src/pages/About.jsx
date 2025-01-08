import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title 
              text1={'ABOUT'}
              text2={'US'}
            />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
          <div className='flex flex-col justify-center gap-3 md:w-2/4 text-gray-600'>
              <p>
                At Gadgety, we connect people with the latest tech gadgets designed to enhance their lives. From smartphones to gaming gear and 
                smart home devices, our store offers a carefully curated collection of high-quality, innovative products. We are dedicated to 
                creating a seamless shopping experience with user-friendly navigation, secure payments, and exceptional customer support.
              </p>
              <p>
                Our goal is to be more than just a store — we strive to be your partner in embracing the future of technology. By staying ahead of 
                trends and providing access to the best in tech, we help our customers stay connected, productive, and inspired.
              </p>
              <b className='text-gray-800'>Our Mission</b>
              <p>
                At Gadgety, our mission is to make technology accessible and impactful for everyone. We focus on quality, affordability, 
                and empowering our customers to embrace innovation with confidence.
              </p>
          </div>
        </div>

        <div className='text-xl py-4 pt-5'>
          <Title 
            text1={'WHY'}
            text2={'CHOOSE US'}
          />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance: 
                <p className='text-gray-600'>At Gadgety, we prioritize quality in every product we offer. Our gadgets are carefully 
                  selected to meet the highest standards of performance, durability, and innovation, ensuring you get only the best.
                </p>
              </b>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-2'>
              <b>Convenience: 
                <p className='text-gray-600'>Shopping with us is simple and hassle-free. With an easy-to-navigate website, secure payment options, and 
                  fast delivery, we make your tech shopping experience smooth and enjoyable.
                </p>
              </b>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service: 
                <p className='text-gray-600'>We’re here to support you every step of the way. Our dedicated customer service team is always ready 
                  to assist with any inquiries, ensuring your satisfaction is our top priority.
                </p>
              </b>
          </div>

        </div>
        <NewsLetterBox />
    </div>
  )
}

export default About