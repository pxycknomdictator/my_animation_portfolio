import React from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SkillContainer from "./components/skills/SkillContainer.jsx";
import ProjectContainer from "./components/Projects/ProjectContainer.jsx";

const App = () => {
  return (
    <main className="bg-primaryLight dark:bg-primaryDark transition-all">
      <Header />
      <Hero />
      <ProjectContainer />
      <SkillContainer />
    </main>
  );
};

export default App;
