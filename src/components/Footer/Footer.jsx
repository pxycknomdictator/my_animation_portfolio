import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <motion.footer
      viewport={{ once: true }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.25, duration: 0.5 }}
    >
      <div className="block text-center text-[1rem] sm:text-2xl font-[500] bg-secondaryLight dark:bg-secondaryDark py-6 text-secondaryDark dark:text-secondaryLight">
        © 2024 <span className="text-blue-500">Noman</span> All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
