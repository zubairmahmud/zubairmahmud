import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Zubair Mahmud</h1>
        <p className="text-lg md:text-xl">Software Developer | Entrepreneur | Content Creator</p>
      </motion.div>
    </section>
  );
};

export default Hero;