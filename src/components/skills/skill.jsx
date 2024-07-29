import { motion } from "framer-motion";
import React from "react";

const Skill = ({ path, svgName, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: id * 0.25, duration: 0.69 }}
      viewport={{ once: true }}
      className="hover:scale-110 transition-all text-center text-2xl font-[500] w-[50%] sm:w-[55%] xl:w-[60%] py-6"
    >
      <img className="cursor-pointer" src={path} alt={svgName} />
      <span className="inline-block mt-7 sm:text-3xl text-secondaryDark dark:text-secondaryLight">
        {svgName}
      </span>
    </motion.div>
  );
};

export default Skill;
