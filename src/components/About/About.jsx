import React from "react";
import about from "/images/about.svg";
import Illustration from "../Hero/Illustration";
import Heading from "../Heading/Heading";
import Article from "./Article";

const About = () => {
  return (
    <section className="bg-secondaryLight dark:bg-secondaryDark py-16">
      <Heading
        text="My Journey in Crafting Compelling Portfolios ✨"
        skillName="About"
      />
      <div className="max-w-[89%] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-7">
        <Illustration illustration={about} />
        <div className="flex flex-col text-secondaryDark dark:text-secondaryLight">
          <h2 className="text-center text-3xl font-[500]">About Us</h2>

          <Article text="👋 Hey there! I'm Noman, an intermediate frontend developer 💻 who began my journey in 2022 with a passion for mastering { HTML, CSS, JavaScript, React, TailwindCSS } 🛠️ . I'm dedicated to creating polished user interfaces and expanding my skills in frontend development.💡" />

          <Article text="In my journey so far, I've delved deep into frontend technologies, gaining proficiency in HTML and CSS for building robust layouts and stylish designs. ✨ I've also honed my JavaScript skills💪🏻to create interactive and dynamic web experiences, and I've embraced React to build scalable and efficient frontend applications." />

          <Article
            text="Beyond coding, I'm enthusiastic about staying current with industry
            trends and best practices. I enjoy exploring new tools 🪛and
            frameworks that enhance development efficiency and user experience.
            I'm committed to continuous learning, seeking out challenges 🔎 that
            push me to grow as a developer. 👨🏻‍💻"
          />

          <Article
            text="As an intermediate developer, I'm eager to contribute my skills to
            meaningful projects and collaborate with teams that value innovation
            and creativity. 🎨 I'm excited about the possibilities of frontend
            development and look forward to expanding my expertise further. "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
