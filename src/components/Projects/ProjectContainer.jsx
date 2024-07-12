import React from "react";
import Heading from "../Heading/Heading.jsx";
import ProjectCard from "./ProjectsCard.jsx";

const ProjectContainer = () => {
  return (
    <section className="mx-auto w-[89%] py-16 bg-primaryLight dark:bg-primaryDark">
      <Heading text="Hello world" skillName="Portfolio" />

      <section className="grid gap-y-8 md:grid-cols-2 md:gap-7 lg:gap-9 xl:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </section>
  );
};

export default ProjectContainer;
