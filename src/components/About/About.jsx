import React from "react";
import about from "/images/about.svg";
import Illustration from "../Hero/Illustration";
import Heading from "../Heading/Heading";

const About = () => {
  return (
    <section className="bg-secondaryLight dark:bg-secondaryDark py-16">
      <Heading text="hello world" skillName="About" />
      <div className="max-w-[89%] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <Illustration illustration={about} />
        <div className="flex flex-col">
          <h2 className="text-center text-3xl font-[500]">About Us</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
