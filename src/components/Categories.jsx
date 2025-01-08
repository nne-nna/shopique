import React from 'react';
import { assets } from '../assets/assets';

const Categories = () => {
  const categories = [
    { 
      name: 'Clothes', 
      image: assets.category_clothes,
      bgColor: 'bg-blue-500/90' // Vibrant blue
    },
    { 
      name: 'Bags', 
      image: assets.category_bags,
      bgColor: 'bg-yellow-500/90' // Warm yellow
    },
    { 
      name: 'Shoes', 
      image: assets.category_shoes,
      bgColor: 'bg-purple-500/90' // Rich purple
    },
    { 
      name: 'Makeup', 
      image: assets.category_makeup,
      bgColor: 'bg-pink-500/90' // Soft pink
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
        Shop Our Top Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer hover:shadow-xl transition-all duration-300 ${category.bgColor}`}
          >
            {/* Image container with overlay */}
            <div className="aspect-[4/5] relative">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-300 group-hover:scale-105"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Category name */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-xl font-medium drop-shadow-lg">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;