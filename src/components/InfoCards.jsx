import React from 'react';
import { assets } from '../assets/assets';

const InfoCards = () => {
    const cardData = [
        {
            title: 'Frequently Asked Questions',
            description: 'Updates on safe Shopping in our Stores',
            image: assets.faqImage,
            bgColor: 'bg-pink-100',
        },
        {
            title: 'Online Payment Process',
            description: 'Updates on safe Shopping in our Stores',
            image: assets.paymentImage,
            bgColor: 'bg-green-100',
        },
        {
            title: 'Home Delivery Options',
            description: 'Updates on safe Shopping in our Stores',
            image: assets.deliveryImage,
            bgColor: 'bg-yellow-100',
        },
    ];

    return (
        <div className="bg-white py-12 mt-6 mb-4">
            <div className="max-w-[1200px] mx-auto px-8">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8">
                    Important Information for You
                </h2>

                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl shadow-md ${card.bgColor} flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg`}
                        >
                            {/* Image */}
                            <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="object-cover max-h-full"
                                />
                            </div>
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {card.title}
                            </h3>
                            {/* Description */}
                            <p className="text-sm text-gray-700">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoCards;
