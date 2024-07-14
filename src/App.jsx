import React from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SkillContainer from "./components/skills/SkillContainer.jsx";
import ProjectContainer from "./components/Projects/ProjectContainer.jsx";
import ContactContainer from "./components/Contact/ContactContainer.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <main className="bg-primaryLight dark:bg-primaryDark transition-all">
      <Header />
      <Hero />
      <About />
      <ProjectContainer />
      <SkillContainer />
      <ContactContainer />
      <Footer />
    </main>
  );
};

export default App;
