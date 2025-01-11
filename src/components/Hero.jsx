import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-1px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-green-800 rounded-lg overflow-hidden relative px-16 py-8 sm:py-12">
        {/* Hero left side */}
        <div className="text-white space-y-6">
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight">
            YOUR ONE-STOP SHOP FOR THE LATEST TRENDS
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-green-100 leading-relaxed">
            Explore a wide selection of fashion-forward clothes, stylish bags, and chic shoes
            that are sure to elevate your look. Whether you're dressing up for a special occasion
            or searching for everyday comfort, we've got you covered.
          </p>
          <Link to="/deals">
            <button className="mt-5 px-6 py-2 bg-green-500 text-white text-sm sm:text-base rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Hero right side */}
        <div className="relative flex justify-center items-center">
          <img
            className="w-4/5 sm:w-3/4 md:w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
            src={assets.hero_image_new}
            alt="Featured Products Showcase"
          />
        </div>

        {/* Optional: Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-green-700 opacity-20"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-green-700 opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
