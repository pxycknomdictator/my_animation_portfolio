import React from "react";
import NavigateButtons from "./NavigateButtons";

const ProjectCard = ({ data }) => {
  const { path, description, visit, code, heading, repository, URL, arrow } =
    data;

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
        <div className="grid md:grid-cols-2 gap-4 md:gap-3 mt-5">
          <NavigateButtons link={URL} color="blue" arrow={arrow} text={visit} />
          <NavigateButtons
            link={repository}
            color="red"
            arrow={arrow}
            text={code}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
