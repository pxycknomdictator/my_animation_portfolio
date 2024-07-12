import React from "react";

const Heading = ({ text, skillName }) => {
  return (
    <div className="grid place-items-center gap-7">
      <span className="cursor-pointer hover:scale-110 transition-all hover:bg-primaryDark dark:hover:bg-primaryLight text-[1rem] lg:text-xl inline-block text-center font-[500] w-[40%] bg-secondaryDark text-secondaryLight dark:text-secondaryDark dark:bg-secondaryLight py-2 sm:max-w-40 lg:py-3 rounded-full">
        {skillName}
      </span>
      <p className="text-[.8rem] text-center sm:text-[1rem] md:text-xl mb-7 text-primaryDark dark:text-primaryLight">
        {text}
      </p>
    </div>
  );
};

export default Heading;
