import React from "react";

const Skill = ({ path, svgName }) => {
  return (
    <div className="text-center text-2xl font-[500] w-[50%] sm:w-[55%] xl:w-[60%] py-6">
      <img src={path} alt={svgName} />
      <span className="inline-block mt-7 sm:text-3xl">{svgName}</span>
    </div>
  );
};

export default Skill;
