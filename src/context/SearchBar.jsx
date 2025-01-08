import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
            setShowAlert(false);
        } else {
            setVisible(false);
            if (showSearch) {
                setShowAlert(true);
                setShowSearch(false);
                setTimeout(() => setShowAlert(false), 3000);
            }
        }
    }, [location, showSearch]);

    return (
        <>
            {showAlert && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-50 border border-gray-200 w-auto max-w-md">
                    <p className="text-gray-700 text-sm">
                        Please navigate to the Collections page to use the search feature
                    </p>
                </div>
            )}
            
            {showSearch && visible && (
                <div className='border-t border-b bg-gray-50 text-center'>
                    <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                        <input 
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            className='flex-1 outline-none bg-inherit text-sm'
                            type="text"
                            placeholder='Search'
                        />
                        <img className='w-4' src={assets.search_icon} alt="" />
                    </div>
                    <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
                </div>
            )}
        </>
    );
}

export default SearchBar