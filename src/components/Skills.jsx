import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import JS from "../assets/js-logo.svg";
import react from "../assets/ReactLogo.svg";
import nodejs from "../assets/node-logo.svg";
import vs from "../assets/Vscode.svg";
import redux from "../assets/Redux.svg";
import figma from "../assets/figma-logo.svg";
import { useTranslation } from "react-i18next";

const skillsData = [
  { name: "JAVASCRIPT", image: JS },
  { name: "REACT", image: react },
  { name: "REDUX", image: redux },
  { name: "NODE", image: nodejs },
  { name: "VS CODE", image: vs },
  { name: "FIGMA", image: figma },
];

function Skills() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div
      className={`border-none w-full h-auto flex flex-col lg:flex-row gap-4  ${
        darkMode
          ? "bg-customDarkSf text-customBestWhite"
          : "bg-customBestWhite text-customDarkSf"
      }`}
    >
      <h2
        className={`border-none font-bold text-4xl md:text-4xl translate-y-[50px] md:translate-y-[70px] ml-[6rem] md:ml-[239px] ${
          darkMode ? "text-customLightGreen" : "text-customSkills"
        }`}
      >
        {t(`skills`)}
      </h2>
      <div className="grid grid-cols-2  md:p-9 ">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="text-center grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-[4rem] mt-3 md:-translate-x-[20px] "
          >
            <img
              src={skill.image}
              className="w-[100px] h-[100px] hover:scale-105 duration-300 translate-x-3 md:translate-x-[90px]  mr-4 mt-12 "
              alt={skill.name}
            />
            <p
              className={`text-m font-medium md:px-4 -translate-x-9 md:translate-x-[1rem] translate-y-[90px] `}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
