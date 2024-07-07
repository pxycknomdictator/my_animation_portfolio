import React from "react";
import sun from "/images/sun.svg";
import moon from "/images/moon.svg";
import menu from "/images/hamburger.svg";
import whiteMenu from "/images/hamburgerWhite.svg";
import Logo from "../Logo";
import Navigation from "./Navigation";

const Header = () => {
  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header className="dark:bg-primaryDark bg-primaryLight py-3">
      <section className="max-w-[85%] mx-auto flex items-end justify-between">
        <Logo />
        <div className="lg:flex items-center gap-8 lg:static hidden lg:block">

          <nav className="myBorder border-primaryDark dark:border-primaryLight pr-7">

            <ul className="flex gap-8 dark:text-primaryLight font-[500]">
              {links.map((elements) => (
                <Navigation key={elements} linkName={elements} />
              ))}
            </ul>

          </nav>

          <div className="w-6 grid">
            <img className="max-w-full" src={moon} alt={moon} />
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
