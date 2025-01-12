import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrendingUp } from 'lucide-react';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 12));
        // Set initialization after content is loaded
        setInitialized(true);
    }, [products]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1, 
        arrows: true, 
        dotsClass: "custom-dots",
        initialSlide: 0,
        lazyLoad: 'ondemand',
        swipeToSlide: true, 
        touchThreshold: 10,
        useCSS: true,
        useTransform: true,
        waitForAnimate: false, 
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='relative bg-gradient-to-b from-white via-gray-50 to-white'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='mb-8 sm:mb-12 relative'>
                    <h1 className='text-3xl md:text-4xl font-semibold mb-4'>
                        Discover Our Best Sellers!
                    </h1>
                    <p className='text-gray-600 text-lg max-w-2xl'>
                        Explore the most popular products loved by our customers. Handpicked just for you!
                    </p>
                    
                    {/* Decorative Elements */}
                    <div className='absolute right-0 top-0 w-24 h-24 bg-green-50 rounded-full -z-10 blur-2xl'></div>
                    <div className='absolute right-20 top-10 w-16 h-16 bg-yellow-50 rounded-full -z-10 blur-xl'></div>
                </div>

                {/* Enhanced Slider Section with initialization check */}
                <div className='relative min-h-[400px]'> 
                    {initialized && bestSeller.length > 0 ? (
                        <div className="slider-container">
                            <style>
                                {`
                                    .slider-container {
                                        visibility: ${initialized ? 'visible' : 'hidden'};
                                    }
                                    
                                    .custom-dots {
                                        display: flex !important;
                                        justify-content: center;
                                        align-items: center;
                                        margin-top: 2rem;
                                        gap: 8px;
                                    }

                                    .custom-dots li {
                                        list-style: none;
                                        cursor: pointer;
                                        width: 80px;
                                        height: 8px;
                                    }

                                    .custom-dots li button {
                                        width: 100%;
                                        height: 100%;
                                        padding: 0;
                                        border: none;
                                        background: #e5e7eb;
                                        border-radius: 4px;
                                        text-indent: -9999px;
                                        transition: all 0.3s ease;
                                    }

                                    .custom-dots li.slick-active button {
                                        background: #166534;
                                    }

                                    .custom-dots li button:hover {
                                        background: #166534;
                                        opacity: 0.7;
                                    }

                                    .slick-slide {
                                        visibility: hidden;
                                    }

                                    .slick-slide.slick-active {
                                        visibility: visible;
                                    }
                                    
                                    /* Force visibility for first slide on mobile */
                                    @media (max-width: 768px) {
                                        .slick-current {
                                            visibility: visible !important;
                                        }
                                    }
                                `}
                            </style>

                            <Slider {...settings}>
                                {bestSeller.map((item, index) => (
                                    <div key={index} className='px-2 sm:px-3'>
                                        <div className='bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300'>
                                            <ProductItem 
                                                id={item._id}
                                                name={item.name}
                                                image={item.image} 
                                                price={item.price}
                                                rating={item.rating}
                                                purchases={item.purchases}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-[400px]">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-800"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BestSeller;