import React from "react";
import project1 from "/images/project1.jpg";

const ProjectCard = () => {
  return (
    <div className="rounded-xl overflow-hidden">
      <img src={project1} alt={project1} />
      <div className="px-7 py-8 bg-secondaryLight dark:bg-secondaryDark">
        <div className="flex items-center justify-between gap-8">
          <article className="text-[.95rem] sm:text-[1.1rem] lg:text-[1.2rem] text-secondaryDark dark:text-secondaryLight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab beatae
            molestias alias accusamus quis tempora iure.
          </article>
        </div>
        <div className="cursor-pointer grid md:grid-cols-2 gap-4 mt-6">
          <button className="text-[1rem] py-1 md:py-1.5 lg:py-2 bg-primaryDark dark:bg-secondaryLight dark:text-secondaryDark text-white font-[500] rounded-md text-xl">
            Visit
          </button>
          <button className="text-[1rem] py-1 md:py-1.5 lg:py-2 bg-primaryDark dark:bg-secondaryLight dark:text-secondaryDark text-white font-[500] rounded-md text-xl">
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
