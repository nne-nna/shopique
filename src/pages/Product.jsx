import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Star, ChevronRight, Truck, Shield, RefreshCw, ThumbsUp, MessageSquare } from 'lucide-react';

// Review Data
const REVIEWS_DATA = [
  {
    id: 1,
    userName: "Helen M.",
    date: "Yesterday",
    rating: 5,
    comment: "Excellent product. The quality is topnotch.",
    likes: 42,
    replies: 0
  },
  {
    id: 2,
    userName: "Ann D.",
    date: "2 days ago",
    rating: 4,
    comment: "I will definitely make another purchase",
    likes: 35,
    replies: 2
  }
];

// Rating Statistics
const RATING_STATS = {
  average: 4.8,
  total: 43,
  distribution: [
    { stars: 5, count: 28 },
    { stars: 4, count: 9 },
    { stars: 3, count: 4 },
    { stars: 2, count: 1 },
    { stars: 1, count: 1 }
  ]
};

// Star Rating Component
const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-200 fill-gray-200'
        }`}
      />
    ))}
  </div>
);

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="min-h-screen bg-gray-50" />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>Home</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span>{productData.category}</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-gray-900">{productData.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={productData.name}
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {productData.image.map((img, index) => (
              <button
                key={index}
                onClick={() => setImage(img)}
                className={`aspect-square rounded-md overflow-hidden ${
                  img === image ? 'ring-2 ring-black' : 'ring-1 ring-gray-200'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-contain" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full mb-4">
              {productData.category}
            </span>
            <h1 className="text-3xl font-bold">{productData.name}</h1>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 text-yellow-400 fill-yellow-400" 
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">(122 reviews)</span>
            </div>
          </div>

          <p className="text-4xl font-bold">
            {currency}{productData.price}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {productData.description}
          </p>

          <div className="space-y-4">
            <h3 className="font-medium">Select Size</h3>
            <div className="flex flex-wrap gap-3">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`w-11 h-11 rounded-md border ${
                    size === item 
                      ? 'border-green-800 bg-green-800 text-white' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => addToCart(productData._id, size)}
            disabled={!size}
            className={`w-full lg:w-auto px-8 py-3 rounded-md text-white text-lg
              ${size 
                ? 'bg-green-800 hover:bg-gray-800 active:bg-gray-700' 
                : 'bg-gray-300 cursor-not-allowed'
              }`}
          >
            Add to Cart
          </button>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                <span className="text-sm">100% Original</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5" />
                <span className="text-sm">7-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="border-b">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 text-sm font-medium ${
                activeTab === 'description'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 text-sm font-medium ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Reviews (122)
            </button>
          </div>
        </div>
        
        <div className="py-6">
          {activeTab === 'description' ? (
            <div className="text-gray-600 space-y-4">
              <p>{productData.description}</p>
              <p>
                This product combines sleek design with advanced functionality, making it an essential 
                addition to your collection. Crafted with premium materials and engineered for 
                durability, it offers an exceptional user experience.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reviews List */}
              <div className="lg:col-span-2 space-y-6">
                {REVIEWS_DATA.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                          {/* Placeholder for user avatar */}
                        </div>
                        <div>
                          <p className="font-medium">{review.userName}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="mt-3 text-gray-600">{review.comment}</p>
                    <div className="flex items-center gap-6 mt-4">
                      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{review.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                        <MessageSquare className="w-4 h-4" />
                        <span>{review.replies}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rating Summary */}
              <div className="lg:border-l lg:pl-8">
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <p className="text-5xl font-bold">{RATING_STATS.average}</p>
                    <StarRating rating={Math.round(RATING_STATS.average)} />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{RATING_STATS.total} reviews</p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2 mt-6">
                  {RATING_STATS.distribution.map(({ stars, count }) => (
                    <div key={stars} className="flex items-center gap-2">
                      <span className="text-sm w-3">{stars}</span>
                      <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-400 rounded-full"
                          style={{ 
                            width: `${(count / RATING_STATS.total) * 100}%` 
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 w-8">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;