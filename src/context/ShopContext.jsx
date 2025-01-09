import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    
    // New states for filtering and pagination
    const [currentCategory, setCurrentCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const productsPerPage = 8;

    const navigate = useNavigate();

    // Filter products when category changes
    useEffect(() => {
        filterProducts(currentCategory);
    }, [currentCategory]);

    const filterProducts = (category) => {
        let filtered = products;
        if (category !== 'All') {
            filtered = products.filter(item => item.category === category);
        }
        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to first page when changing category
    };

    // Get current products for pagination
    const getCurrentProducts = () => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    };

    // Get total pages
    const getTotalPages = () => {
        return Math.ceil(filteredProducts.length / productsPerPage);
    };

    // Existing cart functions
    const addToCart = async (itemId, size) => {
        try {
            // Handle default size (for products without size options)
            if (size === 'default') {
                let cartData = structuredClone(cartItems);
                
                if (cartData[itemId]) {
                    cartData[itemId]['default'] = (cartData[itemId]['default'] || 0) + 1;
                } else {
                    cartData[itemId] = { default: 1 };
                }
                
                setCartItems(cartData);
                toast.success('Added to cart');
                return;
            }
    
            // Handle products with size options
            if (!size) {
                toast.error('Select Product Size');
                return;
            }
    
            let cartData = structuredClone(cartItems);
    
            if (cartData[itemId]) {
                cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
            } else {
                cartData[itemId] = { [size]: 1 };
            }
            
            setCartItems(cartData);
            toast.success('Added to cart');
        } catch (error) {
            toast.error('Failed to add to cart');
            console.error('Add to cart error:', error);
        }
    }
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    // Handle error
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    // Handle error
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        // New values for filtering and pagination
        currentCategory,
        setCurrentCategory,
        currentPage,
        setCurrentPage,
        filteredProducts,
        getCurrentProducts,
        getTotalPages,
        productsPerPage
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;