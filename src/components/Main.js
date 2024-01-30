import React, { useRef, useState } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";

const Main = () => {
  /* 스크롤 이동 */
  const aboutRef = useRef();
  const projectRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const onMoveToMenu = (ref) => {
    setToggleOpen('hidden');
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* 네비게이션 바 */
  const [toggelOpen, setToggleOpen] = useState('hidden');
  const clickButton = () => {
    if (toggelOpen === "hidden"){
      setToggleOpen('block')
    } else {
      setToggleOpen('hidden')
    }
  }

  return (
    <div className="">
      <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              KHJ
            </span>
          </a>
          <div 
            onClick={clickButton}
            class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${toggelOpen} w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li
                onClick={() => onMoveToMenu(aboutRef)}
                className="block md:bg-transparent cursor-pointer"
              >
                About me
              </li>
              <li
                onClick={() => onMoveToMenu(projectRef)}
                className="cursor-pointer"
              >
                Projects
              </li>
              <li
                onClick={() => onMoveToMenu(skillsRef)}
                className="cursor-pointer"
              >
                Skills
              </li>
              <li
                onClick={() => onMoveToMenu(contactRef)}
                className="cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <AboutMe refVal={aboutRef} />
      <Project refVal={projectRef} />
      <Skills refVal={skillsRef} />
      <Contact refVal={contactRef} />
    </div>
  );
};

export default Main;
