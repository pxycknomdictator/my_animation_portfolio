import React, { useContext } from "react";
import sun from "/images/sun.svg";
import moon from "/images/moon.svg";
import menu from "/images/hamburger.svg";
import whiteMenu from "/images/hamburgerWhite.svg";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation";
import FormStore from "../../Store";

const Header = () => {
  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  const { theme, switchTheme } = useContext(FormStore);

  return (
    <header className="myShadow dark:myDarkShadow z-10 dark:bg-primaryDark bg-primaryLight py-4 sticky top-0 bottom-0">
      <section className="max-w-[89%] mx-auto flex items-center justify-between relative">
        <div className="mb-5">
          <Logo />
        </div>

        <div className="lg:flex items-center gap-8 absolute hidden top-[4.5rem] lg:static left-0 w-full lg:w-auto lg:right-0 lg:top-0 bg-primaryLight dark:bg-primaryDark">
          <nav className="py-3 lg:py-0 linksBorder lg:linksBorderLG lg:myBorder border-primaryDark dark:border-primaryLight lg:pr-7">
            <ul className="flex flex-col items-start lg:items-center gap-5 lg:flex-row lg:gap-8 dark:text-primaryLight font-[500]">
              {links.map((elements) => (
                <Navigation key={elements} linkName={elements} />
              ))}
            </ul>
          </nav>

          <div className="mt-4 lg:mt-0 flex items-center justify-between lg:gap-5">
            <span className="text-primaryDark dark:text-primaryLight font-[500] text-[1.1rem]">
              Switch Theme
            </span>
            <div className="w-6 cursor-pointer" onClick={switchTheme}>
              <img
                className="max-w-full"
                src={`${theme ? sun : moon}`}
                alt={`${theme ? sun : moon}`}
              />
            </div>
          </div>
        </div>

        <div className="w-8 sm:w-9 block lg:hidden">
          <img className="max-w-full" src={menu} alt={menu} />
        </div>
      </section>
    </header>
  );
};

export default Header;
