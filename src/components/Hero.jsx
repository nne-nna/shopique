import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-1px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-green-800 rounded-lg overflow-hidden relative px-6 sm:px-8 md:px-12 py-8 md:py-16 lg:py-20">
        {/* Hero left side */}
        <div className="text-white space-y-4 md:space-y-6 text-center md:text-left z-10">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
            STAY AHEAD IN STYLE!
          </h1>
          <p className="text-sm sm:text-base text-green-100 leading-relaxed max-w-xl mx-auto md:mx-0">
            Explore a wide selection of fashion-forward clothes, stylish bags, and chic shoes
            that are sure to elevate your look. Whether you're dressing up for a special occasion
            or searching for everyday comfort, we've got you covered.
          </p>
          <Link to="/deals" className="inline-block">
            <button className="mt-4 px-6 py-3 bg-green-500 text-white text-sm sm:text-base rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Hero right side */}
        <div className="relative flex justify-center items-center order-first md:order-last">
          <img
            className="w-full max-w-md md:w-4/5 lg:w-3/4 h-auto object-contain transform hover:scale-105 transition-transform duration-500"
            src={assets.hero_image_new}
            alt="Featured Products Showcase"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 hidden sm:block">
          <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-green-700 opacity-20"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 hidden sm:block">
          <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full bg-green-700 opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;