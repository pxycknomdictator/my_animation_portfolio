import React from "react";

const Navigation = ({ linkName }) => {
  return (
    <a
      className="navEffects text-[1.1rem] dark:before:bg-primaryLight"
      href={`#${linkName}`}
    >
      {linkName}
    </a>
  );
};

export default Navigation;
