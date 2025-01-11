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
    navigate('/deals', { state: { category: categoryName } }); // Pass category using state
  };

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
            onClick={() => handleCategoryClick(category.name)} // Navigate to Deals page with category
          >
            <div className="aspect-[4/5] relative">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4">
              <h3 className="text-white text-xl font-medium">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
