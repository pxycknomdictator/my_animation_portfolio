import React from "react";

const Links = ({ social, URL, name }) => {
  return (
    <a href={URL} className="max-w-8 inline-block" target="_blank">
      <img className="w-full" src={social} alt={social} />
      <span className="text-xs text-primaryDark dark:text-primaryLight">
        {name}
      </span>
    </a>
  );
};

export default Links;
