import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import { Heart } from 'lucide-react';

const TopDeals = () => {
    const {products} = useContext(ShopContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    // Updated categories to match your data
    const categories = ['All', 'Clothes', 'Bags', 'Accessories', 'Shoes'];

    useEffect(() => {
        filterProducts(currentCategory);
    }, [currentCategory, products]);

    const filterProducts = (category) => {
        let filtered = products;
        if (category !== 'All') {
            filtered = products.filter(item => item.category === category);
        }
        setFilteredProducts(filtered);
        setCurrentPage(1);
    };

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className='max-w-[1200px] mx-auto px-4 py-8'>
            {/* Header */}
            <h1 className='text-2xl font-semibold mb-6'>
                Today's Best Deals For You!
            </h1>

            {/* Categories */}
            <div className='flex gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar'>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setCurrentCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition-colors
                            ${currentCategory === category 
                                ? 'bg-green-800 text-white' 
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {currentProducts.map((item) => (
                    <div key={item._id} className='relative bg-gray-50 rounded-lg p-4'>
                        <button 
                            className='absolute right-6 top-6 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50'
                            onClick={() => {/* Add wishlist functionality */}}
                        >
                            <Heart className='w-4 h-4' />
                        </button>
                        <ProductItem 
                            id={item._id}
                            name={item.name}
                            image={item.image} 
                            price={item.price}
                            rating={item.rating}
                            purchases={item.purchases}  
                        />
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {filteredProducts.length > productsPerPage && (
                <div className='flex justify-center gap-2 mt-8'>
                    {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded-md
                                ${currentPage === index + 1 
                                    ? 'bg-green-800 text-white' 
                                    : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TopDeals