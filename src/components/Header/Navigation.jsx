import React from "react";
import { Link } from "react-scroll";

const Navigation = ({ linkName }) => {
  return (
    <Link
      offset={-85}
      to={`${linkName}`}
      smooth={true}
      duration={700}
      className="flex items-center navEffectsSmall py-2 lg:py-0 rounded-sm text-[1.1rem] before:bg-[#000000] after:bg-[#000000] dark:before:bg-[#ffffff] dark:after:bg-[#ffffff] before:h-[3px] after:h-[3px] cursor-pointer"
    >
      {linkName}
    </Link>
  );
};

export default Navigation;
