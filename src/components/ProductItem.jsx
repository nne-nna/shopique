import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

const ProductItem = ({id, image, name, price, rating, purchases}) => {
    const {currency, addToCart} = useContext(ShopContext);

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(id, 'default');
    }

    return (
        <div className='group'>
            <Link className='text-gray-700 block' to={`/product/${id}`}>
                {/* Wishlist button */}
                <button 
                    className='absolute right-6 top-6 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50'
                    onClick={(e) => {
                        e.preventDefault();
                        // Add wishlist functionality
                    }}
                >
                    <Heart className='w-4 h-4' />
                </button>

                {/* Image */}
                <div className='overflow-hidden rounded-lg bg-gray-50 p-4 mb-4'>
                    <img 
                        className='w-full h-44 object-contain group-hover:scale-105 transition-transform duration-300' 
                        src={image[0]} 
                        alt={name} 
                    />
                </div>
                
                {/* Content */}
                <div className='space-y-2'>
                    <h3 className='text-sm text-gray-600 line-clamp-2'>{name}</h3>
                    
                    <div className='flex items-center gap-1'>
                        <div className='flex'>
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={14}
                                    className={`${
                                        index < rating 
                                            ? 'fill-yellow-400 text-yellow-400' 
                                            : 'fill-gray-200 text-gray-200'
                                    }`}
                                />
                            ))}
                        </div>
                        <span className='text-xs text-gray-500'>({purchases})</span>
                    </div>

                    <p className='text-lg font-medium'>{currency}{price.toFixed(2)}</p>
                    
                    <button 
                        onClick={handleAddToCart}
                        className='w-full mt-2 px-4 py-2 text-sm font-medium border border-gray-300 
                                 rounded-full hover:bg-green-800 hover:text-white transition-colors'
                    >
                        Add to Cart
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default ProductItem




