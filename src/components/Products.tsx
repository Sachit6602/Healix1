// src/components/Products.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../store/CartContext'; // Replacing useStore with useCart
import hxb from '../components/pics/hxb.png'
import hxg from '../components/pics/hxg.png'
import hxs from '../components/pics/hxs.png'

const products = [
  {
    id: '1',
    name: 'Healix Black',
    price: 129.99,
    image: hxb,
    description: 'Premium diffuser with advanced aromatherapy technology',
  },
  {
    id: '2',
    name: 'Healix Gold',
    price: 79.99,
    image: hxg,
    description: 'Compact and portable solution for on-the-go relief',
  },
  {
    id: '3',
    name: 'Healix Platinum',
    price: 49.99,
    image: hxs,
    description: 'Curated selection of premium essential oils',
  },
];

export default function Products() {
  const { dispatch } = useCart(); // Using CartContext to manage cart

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of innovative diffusers and essential oils designed to support your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">₹{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
