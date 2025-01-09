import React from 'react'
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className="w-full h-full max-w-7xl mx-auto rounded-lg relative overflow-hidden bg-green-800">
      <div className="max-w-[1200px] mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-4 z-10">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Exclusive Deals & Discounts
            </h1>
            <p className="text-green-100 text-sm sm:text-base max-w-xl">
              Discover incredible savings on top-quality products. From trending electronics 
              to must-have accessories, find the best deals handpicked just for you. 
              Don't miss out on these limited-time offers!
            </p>
            <button className="bg-white text-green-800 px-6 py-2 rounded-full 
                           font-medium hover:bg-green-100 transition-colors">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-90">
            <img
              src={assets.deals_banner}
              alt="Deals Banner"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Optional: Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
          <div className="w-64 h-64 rounded-full bg-green-700 opacity-20"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4">
          <div className="w-48 h-48 rounded-full bg-green-700 opacity-20"></div>
        </div>
      </div>
    </div>
  )
}

export default Banner