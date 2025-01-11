import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 px-4">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-10 mb-12">
          {/* Logo, Description, and Payments Column */}
          <div className="md:col-span-2 lg:col-span-2 ">
          <div className="flex justify-start">
            <img src={assets.logo} alt="Shopique" className="h-16" />
          </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Your one-stop shop for all your shopping needs. Discover amazing products at great prices.
            </p>
            <div>
              <h3 className="text-base font-medium text-gray-900 mb-4">Accepted Payments</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-lg p-2 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                  <img src={assets.stripe_logo} alt="Stripe" className="h-3" />
                </div>
                <div className="border rounded-lg p-2 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                  <img src={assets.visa_logo} alt="Visa" className="h-3" />
                </div>
                <div className="border rounded-lg p-2 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                  <img src={assets.mastercard_logo} alt="Mastercard" className="h-3" />
                </div>
                <div className="border rounded-lg p-2 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                  <img src={assets.paypal_logo} alt="PayPal" className="h-3" />
                </div>
                <div className="border rounded-lg p-2 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                  <img src={assets.applepay} alt="Apple Pay" className="h-3" />
                </div>
                <div className="border rounded-lg p-2 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                  <img src={assets.googlepay_logo} alt="Google Pay" className="h-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Department Column */}
          <div className="md:col-span-1">
            <h3 className="text-base font-medium text-gray-900 mb-4">Department</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Fashion</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Electronics</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Home & Living</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Beauty Products</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Books</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Toys</a></li>
            </ul>
          </div>

          {/* About Us Column */}
          <div className="md:col-span-1">
            <h3 className="text-base font-medium text-gray-900 mb-4">About us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">About Shopique</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">News & Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Help</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Press Center</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-1">
            <h3 className="text-base font-medium text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Gift Card</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Mobile App</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Shipping & Delivery</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Order Pickup</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Account Sign-up</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="md:col-span-1">
            <h3 className="text-base font-medium text-gray-900 mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Shopique Help</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Returns</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Track Orders</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange-600 text-sm">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                <a href="#" className="flex items-center text-gray-900 hover:text-orange-600 text-sm">
                <img src={assets.seller_icon} alt="Seller" className="w-5 h-5 mr-2" />
                Become Seller
                </a>
                <a href="#" className="flex items-center text-gray-900 hover:text-orange-600 text-sm">
                <img src={assets.gift_icon} alt="Gift" className="w-5 h-5 mr-2" />
                Gift Cards
                </a>
                <a href="#" className="flex items-center text-gray-900 hover:text-orange-600 text-sm">
                <img src={assets.help_icon} alt="Help" className="w-5 h-5 mr-2" />
                Help Center
                </a>
            </div>
            <div className="text-gray-500 text-sm">
                All Rights reserved by Shopique | {new Date().getFullYear()}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
