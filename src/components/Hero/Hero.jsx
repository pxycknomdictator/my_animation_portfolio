import React from "react";
import { motion } from "framer-motion";
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
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, delay: 0.2 }}
              transition={{ duration: 0.69 }}
              className="font-[500] text-[1.25rem] sm:text-2xl lg:text-3xl text-center lg:text-left"
            >
              👋 Hi, I'm <span className="text-blue-600">Noman</span>
            </motion.h2>
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              transition={{ delay: 0.22, duration: 0.69 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl sm:text-3xl xl:text-5xl md:text-4xl font-[500] my-4 text-center lg:text-left"
            >
              Frontend Developer 💻
            </motion.h2>
            <motion.article
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.69, delay: 0.24 }}
              className="font-[500] text-secondaryDark dark:text-secondaryLight text-center text-[.90rem] md:text-[1rem] lg:text-[.85rem] xl:text-[1.1rem] sm:text-justify"
            >
              I'm a front-end developer who enjoys creating attractive,
              responsive interfaces using React.js and Tailwind CSS. I approach
              each project with a determination to succeed.
            </motion.article>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-7">
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="font-[500]"
              >
                Social Profiles:{" "}
              </motion.span>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Links
                  social={linkedin}
                  names="Linkedin"
                  URL="https://www.linkedin.com/in/noman-awan-3138a1284/"
                  name="linkedin"
                />
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Links
                  social={github}
                  names="Github"
                  URL="https://github.com/pxycknomdictator"
                  name="github"
                />
              </motion.div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:flex lg:gap-6 mt-6">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <Button
                  link="Github"
                  URL="https://github.com/pxycknomdictator"
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <Button link="Download CV" URL="#" />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Illustration illustration={hero} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
