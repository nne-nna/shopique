import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Clothes', image: assets.category_clothes, bgColor: 'bg-yellow-500' },
    { name: 'Bags', image: assets.category_bags, bgColor: 'bg-teal-400' },
    { name: 'Shoes', image: assets.category_shoes, bgColor: 'bg-orange-500' },
    { name: 'Accessories', image: assets.category_makeup, bgColor: 'bg-indigo-500' }
  ];

  const handleCategoryClick = (categoryName) => {
    navigate('/deals', { state: { category: categoryName } });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
        Shop Our Top Categories
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className={`group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer 
              hover:shadow-xl transition-all duration-300 ${category.bgColor}
              transform hover:-translate-y-1 hover:scale-102`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="aspect-square sm:aspect-[4/5] relative p-4 sm:p-6">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-contain transition-transform duration-300 
                  group-hover:scale-105 p-2 sm:p-4"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm 
              p-3 sm:p-4 transform transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="text-white text-base sm:text-lg lg:text-xl font-medium text-center">
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