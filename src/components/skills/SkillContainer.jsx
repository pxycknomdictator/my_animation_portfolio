import React from "react";
import Skill from "./skill";
import skills from "../../JSON/skills.json";
import Heading from "../Heading/Heading";

const SkillContainer = () => {
  return (
    <div
      id="Skills"
      className="w-full bg-secondaryLight dark:bg-secondaryDark py-16"
    >
      <Heading
        text="Skilled in a wide range of advanced technologies 🔥"
        skillName="Skills"
      />
      <section className="w-full sm:w-[95%] sm:mx-auto place-items-center grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-y-6 lg:gap-0">
        {skills.map(({ svgName, path }, index) => (
          <Skill key={svgName} path={path} id={index} svgName={svgName} />
        ))}
      </section>
    </div>
  );
};

export default SkillContainer;
