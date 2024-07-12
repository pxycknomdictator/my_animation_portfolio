import React from "react";
import project1 from "/images/project1.jpg";

const ProjectCard = ({ data }) => {
  const { path, description, visit, code, heading, repository, URL } = data;

  return (
    <div className="rounded-xl overflow-hidden w-full h-auto hover:scale-105 transition-all">
      <img src={path} alt={path} className="cursor-pointer" />
      <div className="px-7 py-8 bg-secondaryLight dark:bg-secondaryDark">
        <div className="flex flex-col justify-between gap-5">
          <h3 className="font-semibold text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] text-secondaryDark dark:text-secondaryLight">
            {heading}
          </h3>
          <article className="text-[.95rem] sm:text-[1rem] md:text-[1rem] text-secondaryDark dark:text-secondaryLight text-justify md:text-left">
            {description}
          </article>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-5">
          <a
            href={URL}
            target="_blank"
            className="text-center text-[.89rem] sm:text-[1rem] py-1.5 md:py-1.5 lg:py-2 transition-all text-white font-[500] rounded-md text-xl cursor-pointer bg-blue-500 hover:bg-blue-600"
          >
            {visit}
          </a>
          <a
            href={repository}
            target="_blank"
            className="text-center text-[.89rem] sm:text-[1rem] py-1.5 md:py-1.5 lg:py-2 transition-all text-white font-[500] rounded-md text-xl cursor-pointer bg-red-600 hover:bg-red-700"
          >
            {code}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
