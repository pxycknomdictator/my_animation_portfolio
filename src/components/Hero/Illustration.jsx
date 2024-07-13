import React from "react";

const Illustration = ({ illustration }) => {
  return (
    <div>
      <img className="max-w-full" src={illustration} alt={illustration} />
    </div>
  );
};

export default Illustration;
