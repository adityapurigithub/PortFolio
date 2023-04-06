import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { links } from "../constants";
import { styles } from "../style";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [navDark, setNavDark] = useState(false);

  const handleSetNav = () => {
    if (window.scrollY > 20) {
      setNavDark(true);
    } else {
      setNavDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSetNav);

    return () => window.removeEventListener("scroll", handleSetNav);
  });

  return (
    <nav
      className={`${
        navDark && "bg-[#050816]"
      } transition-all duration-700 w-full ${styles.paddingX} fixed top-0 z-20`}
    >
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto py-6">
        <Link
          to="/"
          className={`flex gap-2 items-center`}
          onClick={() => {
            window.scrollTo(0, 0);
            setToggle(false);
          }}
        >
          <img
            className="w-[30px] h-[30px] object-cover"
            src={logo}
            alt="A-logo"
          />
          <p className="text-[25px] font-semibold italic tracking-[2px]">
            Aditya Puri
          </p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10 text-[20px]">
          {links.map((link, index) => (
            <li
              className="hover:text-blue-400"
              key={link.id}
              onClick={() => ""}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* small device */}
        <div className="sm:hidden">
          <img
            src={!toggle ? menu : close}
            alt="menuLogo"
            className="w-[30px] h-[30px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`drop-menu ${
              !toggle ? "hidden" : "flex"
            } absolute right-10 top-[50px] min-w-[150px] rounded-xl bg-blue-900 p-8`}
          >
            <ul className="list-none w-full flex flex-col justify-center items-center gap-5">
              {links.map((link, index) => (
                <li
                  className="hover:text-blue-400"
                  key={link.id}
                  onClick={() => ""}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
