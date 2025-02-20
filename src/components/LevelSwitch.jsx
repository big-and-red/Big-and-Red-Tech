import React from 'react';
import { motion } from 'framer-motion';

const LevelSwitch = ({ activeLevel, setActiveLevel }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center mb-8"
    >
      <div className="bg-white rounded-lg p-1 shadow-md inline-flex">
        <button
          onClick={() => setActiveLevel('junior')}
          className={`px-4 py-2 rounded-md transition-all ${
            activeLevel === 'junior'
              ? 'bg-red-500 text-white'
              : 'text-gray-600 hover:text-red-500'
          }`}
        >
          0 to Middle
        </button>
        <button
          onClick={() => setActiveLevel('middle')}
          className={`px-4 py-2 rounded-md transition-all ${
            activeLevel === 'middle'
              ? 'bg-red-500 text-white'
              : 'text-gray-600 hover:text-red-500'
          }`}
        >
          Middle to Senior
        </button>
      </div>
    </motion.div>
  );
};

export default LevelSwitch;