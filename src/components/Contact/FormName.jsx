import React from "react";

const FormName = ({ field }) => {
  return (
    <h4 className="text-primaryDark dark:text-primaryLight text-[1.1rem]">
      {field}
    </h4>
  );
};

export default FormName;
