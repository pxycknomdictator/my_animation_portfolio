import React from "react";

const Navigation = ({ linkName }) => {
  return (
    <a
      className="flex items-center navEffectsSmall py-2 rounded-sm text-[1.1rem] before:bg-[#000000] after:bg-[#000000] dark:before:bg-[#ffffff] dark:after:bg-[#ffffff] before:h-[3px] after:h-[3px]"
      href={`#${linkName}`}
    >
      {linkName}
    </a>
  );
};

export default Navigation;
