import React from "react";

const Article = ({ text }) => {
  return <article className="text-secondaryDark dark:text-secondaryLight text-[.89rem] sm:text-[.95rem] md:text-[.99rem] mt-5 md:mt-6 lg:text-[.89rem] lg:mt-3 xl:text-[1rem] xl:mt-6 text-justify">{text}</article>;
};

export default Article;
