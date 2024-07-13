import React from "react";

const FormHeading = ({ text }) => {
  return (
    <span className="text-secondaryDark dark:text-secondaryLight text-xl lg:text-3xl font-[500] mb-10 block text-center capitalize">
      {text}
    </span>
  );
};

export default FormHeading;
