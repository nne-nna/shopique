import React, { useState, useContext, useRef, useEffect } from 'react';
import { ShopContext } from './ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
  const { products = [], navigate } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter products based on search term
  const handleSearch = (value) => {
    setSearchTerm(value);
    
    if (!value || value.trim() === '') {
      setFilteredProducts([]);
      setShowDropdown(false);
      return;
    }

    if (!Array.isArray(products)) {
      setFilteredProducts([]);
      return;
    }

    const filtered = products
      .filter(product => {
        if (!product) return false;
        
        const productName = product?.name || '';
        const productCategory = product?.category || '';
        const searchLower = value.toLowerCase();
        
        return productName.toLowerCase().includes(searchLower) ||
               productCategory.toLowerCase().includes(searchLower);
      })
      .slice(0, 6);

    setFilteredProducts(filtered);
    setShowDropdown(filtered.length > 0);
  };

  // Handle product selection
  const handleProductSelect = (productId) => {
    if (!productId) return;
    
    setSearchTerm('');
    setShowDropdown(false);
    navigate(`/product/${productId}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
        <input
          type="text"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring focus:ring-gray-200 pr-10 w-full"
        />
        <img
          src={assets.search_icon}
          alt="Search"
          className="absolute right-3 top-2.5 w-4 h-4"
        />
      </form>

      {showDropdown && filteredProducts.length > 0 && (
        <div
          className="absolute mt-2 w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        >
          {filteredProducts.map((product) => {
            if (!product?._id || !product?.name) return null;
            
            return (
              <div
                key={product._id}
                onClick={() => handleProductSelect(product._id)}
                className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              >
                <img 
                  src={product.image || assets.placeholder_image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded"
                  onError={(e) => {
                    e.target.src = assets.placeholder_image;
                  }}
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.category || 'Uncategorized'}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;