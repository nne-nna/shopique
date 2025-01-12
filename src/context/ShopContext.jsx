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
    const [cartItems, setCartItems] = useState(() => {
        // Initialize cart from localStorage if available
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : {};
    });
    
    const [currentCategory, setCurrentCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const productsPerPage = 8;

    const navigate = useNavigate();

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        filterProducts(currentCategory);
    }, [currentCategory]);

    const filterProducts = (category) => {
        let filtered = products;
        if (category !== 'All') {
            filtered = products.filter(item => item.category === category);
        }
        setFilteredProducts(filtered);
        setCurrentPage(1);
    };

    const getCurrentProducts = () => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    };

    const getTotalPages = () => {
        return Math.ceil(filteredProducts.length / productsPerPage);
    };

    const addToCart = async (itemId, size) => {
        try {
            if (size === 'default') {
                setCartItems(prev => {
                    const updated = { ...prev };
                    if (!updated[itemId]) {
                        updated[itemId] = { default: 1 };
                    } else {
                        updated[itemId]['default'] = (updated[itemId]['default'] || 0) + 1;
                    }
                    return updated;
                });
                toast.success('Added to cart');
                return;
            }

            if (!size) {
                toast.error('Select Product Size');
                return;
            }

            setCartItems(prev => {
                const updated = { ...prev };
                if (!updated[itemId]) {
                    updated[itemId] = { [size]: 1 };
                } else {
                    updated[itemId][size] = (updated[itemId][size] || 0) + 1;
                }
                return updated;
            });
            
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
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        setCartItems(prev => {
            const updated = { ...prev };
            if (quantity <= 0) {
                // Remove the size entry if quantity is 0
                if (updated[itemId]) {
                    delete updated[itemId][size];
                    // Remove the item entirely if no sizes left
                    if (Object.keys(updated[itemId]).length === 0) {
                        delete updated[itemId];
                    }
                }
            } else {
                if (!updated[itemId]) {
                    updated[itemId] = {};
                }
                updated[itemId][size] = quantity;
            }
            return updated;
        });
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (itemInfo) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }
            }
        }
        return totalAmount;
    }

    // Clear cart function (useful for after checkout)
    const clearCart = () => {
        setCartItems({});
        localStorage.removeItem('cartItems');
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
        clearCart,
        navigate,
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