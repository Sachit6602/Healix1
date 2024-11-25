import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const cart = useStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              healix
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </a>
              <button className="relative p-2">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 text-gray-700">Products</a>
            <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}