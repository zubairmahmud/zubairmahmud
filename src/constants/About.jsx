import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">About Me</h2>
      <p className="text-lg mb-2">I'm passionate about building beautiful digital experiences.</p>
    </motion.section>
  );
};

export default About;