import React, { useRef, useState } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";

const Main = () => {
  /* 스크롤 이동 */
  const aboutRef = useRef();
  const projectRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const onMoveToMenu = (ref) => {
    setToggleOpen("hidden");
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* 네비게이션 바 */
  const [toggelOpen, setToggleOpen] = useState("hidden");
  const clickButton = () => {
    if (toggelOpen === "hidden") {
      setToggleOpen("block");
    } else {
      setToggleOpen("hidden");
    }
  };

  return (
    <div className="">
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span
            onClick={() => onMoveToMenu(aboutRef)}
            className="cursor-pointer self-center text-2xl font-semibold transition-all hover:text-[#FF8982]"
          >
            KHJ's Portfolio
          </span>

          <div
            onClick={clickButton}
            className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${toggelOpen} w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-lg font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li
                onClick={() => onMoveToMenu(aboutRef)}
                className="block md:bg-transparent transition-all cursor-pointer hover:text-[#FF8982]"
              >
                About me
              </li>
              <li
                onClick={() => onMoveToMenu(projectRef)}
                className="cursor-pointer transition-all hover:text-[#FF8982]"
              >
                Projects
              </li>
              <li
                onClick={() => onMoveToMenu(skillsRef)}
                className="cursor-pointer transition-all hover:text-[#FF8982]"
              >
                Skills
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <AboutMe elementRef={aboutRef} />
      <Project elementRef={projectRef} />
      <Skills elementRef={skillsRef} />
      <div className="flex flex-col justify-center text-center bg-[#414656] text-white h-[100px]">
        © 2024. Kim Hye Jeong. / All rights reserved.
      </div>
    </div>
  );
};

export default Main;
