import React from 'react';
import { assets } from '../assets/assets'; 

const NewsLetterBox = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-6">
                {/* Left Section: Text and Input Box */}
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                        Stay Updated with Our Newsletter
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Subscribe to receive updates on exclusive offers, new products, and more!
                    </p>
                    <div className="flex items-center gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full max-w-sm p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        />
                        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src={assets.newsletterImage}
                        alt="Newsletter Visual"
                        className="max-w-[300px] lg:max-w-[400px] rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default NewsLetterBox;

