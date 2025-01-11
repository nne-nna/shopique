import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import SearchBar from "../context/SearchBar";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const { getCartCount } = useContext(ShopContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
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
              <img src={assets.logo} className="w-36" alt="Logo" />
            </Link>

            {/* Nav Items */}
            <ul className="hidden sm:flex gap-10 text-gray-700 items-center">
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

          <div className="flex items-center gap-8">
            {/* Search Bar */}
            <div className="hidden sm:block">
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
            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className="w-5 cursor-pointer sm:hidden"
              alt="Menu"
            />
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 py-2 bg-green-800 text-white rounded-md"
                  : "flex items-center hover:text-green-800"
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/deals"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 py-2 bg-green-800 text-white rounded-md"
                  : "flex items-center hover:text-green-800"
            }
          >
            Deals
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/whats-new"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 py-2 bg-green-800 text-white rounded-md"
                  : "flex items-center hover:text-green-800"
            }
          >
            What's New
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/delivery"
            className={({ isActive }) =>
              isActive
                ? "py-2 pl-6 px-4 bg-orange-600 text-white rounded-md"
                : "py-2 pl-6 hover:text-orange-600"
            }
          >
            Delivery
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
