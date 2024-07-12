import React from "react";
import Heading from "../Heading/Heading.jsx";
import ProjectCard from "./ProjectsCard.jsx";
import projectJson from "../../JSON/projects.json";

const ProjectContainer = () => {
  return (
    <section className="mx-auto w-[89%] py-16 bg-primaryLight dark:bg-primaryDark">
      <Heading
        text="Explore my diverse project showcase highlighting creativity and skills 🚀"
        skillName="Projects"
      />

      <section className="grid gap-y-8 md:grid-cols-2 md:gap-7 lg:gap-9 2xl:grid-cols-3 mt-5">
        {projectJson.map((elements) => {
          return <ProjectCard key={elements.id} data={elements} />;
        })}
      </section>
    </section>
  );
};

export default ProjectContainer;
