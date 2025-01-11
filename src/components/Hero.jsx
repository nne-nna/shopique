import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full h-[calc(80vh-64px)] sm:h-[calc(75vh-64px)] flex items-center justify-center px-4">
      <div className="bg-green-800 w-full h-full max-w-7xl mx-auto rounded-lg overflow-hidden flex flex-col sm:flex-row items-center relative">
        {/* Hero left side */}
        <div className="w-full sm:w-1/2 flex flex-col items-start justify-center py-6 sm:py-10 px-6 sm:px-12">
          <div className="text-white">
            <h1 className="prata-regular font-semibold text-3xl sm:text-5xl lg:text-4xl leading-tight mt-4">
              YOUR ONE-STOP SHOP FOR THE LATEST TRENDS
            </h1>
            <p className="font-normal text-sm md:text-base mt-6 leading-relaxed max-w-xl">
              Explore a wide selection of fashion-forward clothes, stylish bags, and chic shoes
              that are sure to elevate your look. Whether you're dressing up for a special occasion
              or searching for everyday comfort, we've got you covered.
            </p>
            <div className="mt-8">
              <Link to="/deals">
                <button className="px-8 py-3 bg-green-500 text-white text-sm sm:text-base rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero right side */}
        <div className="w-full sm:w-1/2 flex justify-center items-center relative h-[45vh] sm:h-auto mt-0 sm:mt-0">
          <img 
            className="w-4/5 sm:w-3/4 h-auto object-contain relative z-10 transform hover:scale-105 transition-transform duration-500" 
            src={assets.hero_image_new} 
            alt="Featured Products Showcase" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;




