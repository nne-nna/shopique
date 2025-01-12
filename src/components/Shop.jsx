import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { Heart } from 'lucide-react';

const Shop = () => {
    const { products } = useContext(ShopContext);
    const location = useLocation(); // Get location object
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const categories = ['All', 'Clothes', 'Bags', 'Accessories', 'Shoes'];

    // Use the category passed via location state
    useEffect(() => {
        if (location.state?.category) {
            setCurrentCategory(location.state.category);
        }
    }, [location.state]);

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

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className='max-w-[1200px] mx-auto px-4 py-16'>
            <div className='mb-10'>
                <h1 className='text-3xl md:text-4xl font-bold mb-3'>Curated Collections, Just For You!</h1>
                <p className='text-gray-600 text-lg'>Explore a wide range of products tailored to your style and needs</p>
            </div>

            <div className='flex gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar'>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setCurrentCategory(category)}
                        className={`px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                            ${currentCategory === category 
                                ? 'bg-green-800 text-white shadow-md' 
                                : 'bg-gray-100 hover:bg-gray-200 hover:shadow-sm'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='bg-gray-50/50 rounded-2xl p-6 md:p-8'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {currentProducts.map((item) => (
                        <div key={item._id} className='relative bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300'>
                            <button 
                                className='absolute right-6 top-6 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50'
                                onClick={() => {/* Add wishlist functionality eventually...*/}}
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
            </div>
        </div>
    );
};

export default Shop;