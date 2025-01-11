import React, { useState, useContext, useRef, useEffect } from 'react';
import { ShopContext } from './ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
  const { products, navigate } = useContext(ShopContext);
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
    
    if (value.trim() === '') {
      setFilteredProducts([]);
      setShowDropdown(false);
      return;
    }

    const filtered = products
      .filter(product => 
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 6); // Limit to 6 results

    setFilteredProducts(filtered);
    setShowDropdown(true);
  };

  // Handle product selection
  const handleProductSelect = (productId) => {
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
          className="absolute mt-2 bg-white rounded-lg shadow-lg border border-gray-00 z-50"
          style={{ width: '300px' }} // Increased the width here
        >
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              onClick={() => handleProductSelect(product._id)}
              className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-10 h-10 object-cover rounded"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">{product.name}</p>
                <p className="text-xs text-gray-500">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
