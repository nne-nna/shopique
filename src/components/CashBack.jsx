import React from 'react';
import { assets } from '../assets/assets';

const CashBack = () => {
  return (
    <div className="max-w-7xl mx-auto rounded-lg relative w-full h-[400px] overflow-hidden mt-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={assets.cashBack_Image} 
          alt="Cashback promotion" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Green overlay box */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-green-900 text-white p-8 sm:p-12 max-w-xs sm:max-w-md mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Get 5% Cash Back On $200
          </h2>
          
          <p className="text-gray-200 mb-8 text-sm sm:text-base">
            Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
          </p>

          <button className="border border-white rounded-full px-8 py-2 text-sm hover:bg-white hover:text-green-900 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashBack;
