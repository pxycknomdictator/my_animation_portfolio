import React from "react";

const Button = ({ link, URL }) => {
  return (
    <a
      href={URL}
      target="_blank"
      className="hover:scale-110 transition-all inline-block text-center font-[500] bg-blue-500 py-3 lg:px-8 rounded-md text-secondaryLight hover:bg-blue-600 delay-150"
    >
      <span>{link}</span>
    </a>
  );
};

export default Button;
