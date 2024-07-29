import { motion } from "framer-motion";
import React from "react";

const Heading = ({ text, skillName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="grid place-items-center gap-7"
    >
      <span className="cursor-pointer hover:scale-110 transition-all hover:bg-primaryDark dark:hover:bg-primaryLight text-[1rem] lg:text-xl inline-block text-center font-[500] w-[40%] bg-secondaryDark text-secondaryLight dark:text-secondaryDark dark:bg-secondaryLight py-2 sm:max-w-40 lg:py-3 rounded-full">
        {skillName}
      </span>
      <p className="text-[.8rem] text-center sm:text-[1rem] md:text-xl mb-7 text-primaryDark dark:text-primaryLight">
        {text}
      </p>
    </motion.div>
  );
};

export default Heading;
