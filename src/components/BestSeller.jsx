import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 12));
    }, [products]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5, // Changed to scroll all visible slides at once
        arrows: false, // Remove arrows
        dotsClass: "slick-dots slick-thumb", // Custom dots class
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className='max-w-[1200px] mx-auto px-8 py-10'>
            <h1 className='text-3xl font-semibold mb-6'>
                Today's Best Deals For You!
            </h1>

            <div className='relative'>
                <Slider {...settings}>
                    {bestSeller.map((item, index) => (
                        <div key={index} className='px-2'>
                            <div className='bg-white p-4 rounded-lg'>
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
        </div>
    );
};

export default BestSeller;;