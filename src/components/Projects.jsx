import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import pizzaa from "../assets/pızza.png";
import { useTranslation } from "react-i18next";
import s10d3 from "../assets/s10-g3.jpg";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  const pizzaDescription = t("pizza");
  const watchL = t(`watch`);

  const projects = [
    {
      title: "Pizza",
      description: pizzaDescription,
      image: pizzaa,
      siteLink:
        "https://fsweb-s7-challenge-pizza-git-main-esrasaydans-projects.vercel.app/",
      githubLink: "https://github.com/EsraSaydan/fsweb-s7-challenge-pizza",
    },
    {
      title: "Watch List",
      description: watchL,
      image: s10d3,
      siteLink:
        "https://fsweb-s10g3-redux-watchlist-solution-three.vercel.app/",
      githubLink:
        "https://github.com/EsraSaydan/fsweb-s10g3-redux-watchlist-solution",
    },
  ];
  return (
    <div
      className={`${
        darkMode ? "bg-customDarkGreen" : "bg-customLightGreen"
      } min-h-screen `}
    >
      <h1
        className={`border-none font-bold translate-y-[70px] text-4xl ml-[130px] md:ml-[220px]  ${
          darkMode ? "text-customLightGreen" : "text-customSkills"
        }`}
      >
        {t(`project`)}
      </h1>
      <div className="space-y-4 mt-[90px]  flex flex-col items-center px-10 py-5 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row md:w-[820px] md:h-[350px] hover:scale-105 duration-300  rounded-lg shadow-lg  p-0   ${
              darkMode ? "bg-customDarkProject" : "bg-customWhite"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/3 h-64 lg:h-auto  object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none "
            />
            <div className="w-full lg:w-2/3 p-4 md:pl-2">
              <h2
                className={`text-2xl font-bold mt-4 ml-4 mb-1 ${
                  darkMode ? "text-[#C1BAED]" : "text-[#4338CA]"
                }`}
              >
                {project.title}
              </h2>
              <p
                className={`mt-4 ml-4 text-sm mr-3 ${
                  darkMode ? "text-white" : "text-[#383838]"
                }`}
              >
                {project.description}
              </p>
              <div className="flex space-x-1 mt-4 ml-4 gap-1">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"
                  } text-white`}
                >
                  {t(`reactL`)}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"
                  } text-white`}
                >
                  {t(`reduxL`)}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"
                  } text-white`}
                >
                  {t(`vercel`)}
                </span>
              </div>
              <div className="flex space-x-7 ">
                <a
                  href={project.siteLink}
                  className={`underline hover:scale-105 duration-300  ml-4 mt-4 md:mt-[40px]  ${
                    darkMode ? "text-[#CBF281]" : "text-[#120B39]"
                  }`}
                >
                  {t(`view`)}
                </a>
                <a
                  href={project.githubLink}
                  className={`underline hover:scale-105 duration-300  mt-4 md:mt-[40px] ${
                    darkMode ? "text-[#CBF281]" : "text-[#120B39]"
                  }`}
                >
                  {t(`github`)}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
