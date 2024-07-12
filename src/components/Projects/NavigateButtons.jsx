import React from "react";

const NavigateButtons = ({ visit, code, arrow, URL, repository }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-3 mt-5">
      <a
        href={URL}
        target="_blank"
        className={`uppercase italic text-center text-[.89rem] sm:text-[1rem] md:text-[.78rem] py-2 lg:py-2 transition-all xl:text-[.90rem] 2xl:text-[1.2rem] xl:gap-1 2xl:gap-3 text-white font-[500] rounded-md cursor-pointer bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-2`}
      >
        {visit}
        <img
          className="w-4 sm:w-[1.1rem] sm:mb-[.1rem] xl:w-5 mb-[.2rem] xl:mb-1 2xl:w-6 2xl:py-[.56rem]"
          src={arrow}
          alt={arrow}
        />
      </a>
      <a
        href={repository}
        target="_blank"
        className={`uppercase italic text-center text-[.89rem] sm:text-[1rem] md:text-[.78rem] py-2 lg:py-2 transition-all xl:text-[.90rem] 2xl:text-[1.2rem] xl:gap-1 2xl:gap-3 text-white font-[500] rounded-md cursor-pointer bg-red-500 hover:bg-red-600 flex items-center justify-center gap-2`}
      >
        {code}
        <img
          className="w-4 sm:w-[1.1rem] sm:mb-[.1rem] xl:w-5 mb-[.2rem] xl:mb-1 2xl:w-6 2xl:py-[.56rem]"
          src={arrow}
          alt={arrow}
        />
      </a>
    </div>
  );
};

export default NavigateButtons;
