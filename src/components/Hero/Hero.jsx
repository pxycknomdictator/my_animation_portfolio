import React from "react";
import hero from "/images/hero.svg";
import Button from "./Button";
import Links from "./Links";

import linkedin from "/images/linkedin.svg";
import github from "/images/github.svg";
import Illustration from "./Illustration";

const Hero = () => {
  return (
    <section
      id="Home"
      className="bg-primaryLight dark:bg-primaryDark mt-14 lg:mt-[.30rem]"
    >
      <div className="max-w-[89%] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center">
          <div className="text-primaryDark dark:text-primaryLight">
            <h2 className="font-[500] text-[1.25rem] sm:text-2xl lg:text-3xl text-center lg:text-left">
              👋 Hi, I'm <span className="text-blue-600">Noman</span>
            </h2>
            <h2 className="text-2xl sm:text-3xl xl:text-5xl md:text-4xl font-[500] my-4 text-center lg:text-left">
              Frontend Developer 💻
            </h2>
            <article className="font-[500] text-secondaryDark dark:text-secondaryLight text-center text-[.90rem] md:text-[1rem] lg:text-[.85rem] xl:text-[1.1rem] sm:text-justify">
              I'm a front-end developer who enjoys creating attractive,
              responsive interfaces using React.js and Tailwind CSS. I approach
              each project with a determination to succeed.
            </article>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-7">
              <span className="font-[500]">Social Profiles: </span>
              <Links
                social={linkedin}
                names="Linkedin"
                URL="https://www.linkedin.com/in/noman-awan-3138a1284/"
                name="linkedin"
              />
              <Links
                social={github}
                names="Github"
                URL="https://github.com/pxycknomdictator"
                name="github"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:flex lg:gap-6 mt-6">
              <Button link="Github" URL="https://github.com/pxycknomdictator" />
              <Button link="Download CV" URL="#" />
            </div>
          </div>
        </div>

        <Illustration illustration={hero} />
      </div>
    </section>
  );
};

export default Hero;
