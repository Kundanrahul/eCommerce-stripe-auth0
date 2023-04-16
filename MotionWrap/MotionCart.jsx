import React from 'react';
import { motion } from 'framer-motion';

const MotionCart = ({ children }) => {
  return (
    <motion.div
      animate={{ x: [-50,-100,0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCart;