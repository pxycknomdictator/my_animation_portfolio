import React from "react";

const Heading = ({ text, skillName }) => {
  return (
    <div className="grid place-items-center gap-7">
      <span className="cursor-pointer hover:scale-110 transition-all hover:bg-primaryDark dark:hover:bg-primaryLight text-xl inline-block text-center font-[500] w-[30%] bg-secondaryDark text-secondaryLight dark:text-secondaryDark dark:bg-secondaryLight py-2 md:max-w-36 rounded-full">
        {skillName}
      </span>
      <p className="text-[.89rem] sm:text-xl md:text-2xl mb-7 text-primaryDark dark:text-primaryLight">
        {text}
      </p>
    </div>
  );
};

export default Heading;
