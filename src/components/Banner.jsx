import React from 'react'
import { assets } from '../assets/assets';
import { ArrowDown } from 'lucide-react';

const Banner = () => {
  return (
    <div className="w-full h-full max-w-7xl mx-auto rounded-lg relative overflow-hidden bg-green-800">
      <div className="max-w-[1200px] mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-4 z-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Shop the Latest Trends
          </h1>
          <p className="text-green-100 text-sm sm:text-base max-w-xl">
            Explore our curated collection of top-quality products. From stylish apparel to essential accessories, 
            find everything you need in one place. Start shopping now and elevate your wardrobe and lifestyle!
          </p>

          <button className="px-8 py-3 bg-green-500 text-white text-sm sm:text-base rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
              Shop Now
              <ArrowDown className="w-4 h-4" />
          </button>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-90">
            <img
              src={assets.deals_banner}
              alt="Deals Banner"
              className="absolute inset-0 w-full h-full object-contain rounded-lg"
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