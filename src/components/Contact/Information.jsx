import React from "react";

const Information = ({ information }) => {
  const {
    flag,
    leftSide1,
    leftSide2,
    leftSide3,
    rightSide1,
    rightSide2,
    rightSide3,
  } = information;

  return (
    <section className="text-center bg-secondaryLight dark:bg-secondaryDark pt-8 pb-5 px-5 lg:px-9 rounded-xl">
      <div className="text-center bg-green-600 inline-block py-3 px-3 rounded-full">
        <img className="w-8 inline" src={flag} alt={flag} />
      </div>

      <div className="flex justify-between text-secondaryDark list-none mt-7">
        <div className="text-left text-primaryDark dark:text-primaryLight text-[.89rem] sm:text-xl lg:text-[1rem] font-[500] flex flex-col gap-[.69rem] lg:gap-2">
          <li>{leftSide1}:</li>
          <li>{leftSide2}:</li>
          <li>{leftSide3}:</li>
        </div>

        <div className="text-right text-primaryDark dark:text-primaryLight text-[.89rem] sm:text-xl lg:text-[1rem] font-[500] flex flex-col gap-[.69rem] lg:gap-2">
          <li>{rightSide1}</li>
          <li>{rightSide2}</li>
          <li>{rightSide3}</li>
        </div>
      </div>
    </section>
  );
};

export default Information;
