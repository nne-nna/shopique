import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import SearchBar from "../context/SearchBar";
import { X } from "lucide-react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useContext(ShopContext);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-white shadow-md z-50"
            : "relative bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between py-3 px-4 font-medium max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to="/">
              <img src={assets.logo} className="w-28 sm:w-36" alt="Logo" />
            </Link>

            {/* Desktop Nav Items */}
            <ul className="hidden lg:flex gap-10 text-gray-700 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-1.5 bg-green-800 text-white rounded-md"
                    : "flex items-center hover:text-green-800"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/deals"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-1.5 bg-green-800 text-white rounded-md"
                    : "flex items-center hover:text-green-800"
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/place-order"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-1.5 bg-green-800 text-white rounded-md"
                    : "flex items-center hover:text-green-800"
                }
              >
                Delivery
              </NavLink>
            </ul>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            {/* Search Bar - Always visible */}
            <div className="w-full max-w-xs">
              <SearchBar />
            </div>

            <Link to="/login">
              <img
                className="w-5 cursor-pointer"
                src={assets.profile_icon}
                alt="Profile"
              />
            </Link>
            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-orange-600 text-white aspect-square rounded-full text-[8px]">
                {getCartCount()}
              </p>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <img
                  src={assets.menu_icon}
                  className="w-5 cursor-pointer"
                  alt="Menu"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          ref={menuRef}
          className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 z-50 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="py-4 px-6 space-y-4">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md transition-colors ${
                  isActive
                    ? "bg-green-800 text-white"
                    : "text-gray-700 hover:bg-green-50"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/deals"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md transition-colors ${
                  isActive
                    ? "bg-green-800 text-white"
                    : "text-gray-700 hover:bg-green-50"
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/place-order"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md transition-colors ${
                  isActive
                    ? "bg-green-800 text-white"
                    : "text-gray-700 hover:bg-green-50"
                }`
              }
            >
              Delivery
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;