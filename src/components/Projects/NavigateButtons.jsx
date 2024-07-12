import React from "react";

const NavigateButtons = ({ link, text, arrow, color }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`uppercase italic text-center text-[.89rem] sm:text-[1rem] md:text-[.78rem] py-2 lg:py-2 transition-all xl:text-[.90rem] xl:gap-1 2xl:gap-3 text-white font-[500] rounded-md cursor-pointer bg-${color}-500 hover:bg-${color}-600 flex items-center justify-center gap-2`}
    >
      {text}
      <img
        className="w-4 sm:w-[1.1rem] sm:mb-[.1rem] xl:w-5 mb-[.2rem] xl:mb-1"
        src={arrow}
        alt={arrow}
      />
    </a>
  );
};

export default NavigateButtons;
