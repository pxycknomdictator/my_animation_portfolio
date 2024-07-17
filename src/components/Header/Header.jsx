import React, { useContext } from "react";
import sun from "/images/sun.svg";
import moon from "/images/moon.svg";
import menu from "/images/hamburger.svg";
import whiteMenu from "/images/hamburgerWhite.svg";
import cross from "/images/cross.svg";
import crossWhite from "/images/crossWhite.svg";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation";
import FormStore from "../../Store";

const Header = () => {
  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  const { theme, switchTheme, handleDropdown, dropMenu } =
    useContext(FormStore);

  return (
    <header className="myShadow dark:myDarkShadow z-10 dark:bg-primaryDark bg-primaryLight py-4 sticky top-0 bottom-0">
      <section className="max-w-[89%] mx-auto flex items-center justify-between relative">
        <div className="mb-5">
          <Logo />
        </div>

        <div
          className={`lg:flex items-center gap-8 absolute lg:static w-full lg:w-auto lg:right-0 lg:top-0 bg-primaryLight dark:bg-primaryDark myTransition lg:myTransitionNone ${
            dropMenu ? "top-[4.5rem] left-0" : "-top-[400px]"
          } `}
        >
          <nav className="py-2 lg:py-0 linksBorder lg:linksBorderLG lg:myBorder border-primaryDark dark:border-primaryLight lg:pr-7">
            <ul className="flex flex-col lg:items-center gap-5 lg:flex-row lg:gap-8 dark:text-primaryLight font-[500]">
              {links.map((elements) => (
                <Navigation key={elements} linkName={elements} />
              ))}
            </ul>
          </nav>

          <div className="py-5 lg:py-0 flex items-center justify-between lg:gap-5">
            <span className="text-primaryDark dark:text-primaryLight font-[500] text-[1.1rem]">
              Switch Theme
            </span>
            <div className="w-6 lg:w-7 cursor-pointer" onClick={switchTheme}>
              <img
                className="max-w-full"
                src={`${theme ? sun : moon}`}
                alt={`${theme ? sun : moon}`}
              />
            </div>
          </div>
        </div>

        <div
          className="w-8 sm:w-9 block lg:hidden cursor-pointer"
          onClick={handleDropdown}
        >
          {dropMenu ? (
            <img
              className="max-w-full myRotation"
              src={`${theme ? crossWhite : cross}`}
              alt={`${theme ? crossWhite : cross}`}
            />
          ) : (
            <img
              className="max-w-full myNewRotation"
              src={`${theme ? whiteMenu : menu}`}
              alt={`${theme ? whiteMenu : menu}`}
            />
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
