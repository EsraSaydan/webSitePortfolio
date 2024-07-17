import DarkModeToggle from "./DarkModeToggle";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import m from "../assets/m.jpeg";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  const clickHandle = () => {
    changeLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <div className="flex">
      {" "}
      <div className="w-2/3 ">
        {" "}
        <div
          className={`h-[500px] md:h-[671px]  rounded-0 ${
            darkMode ? "bg-customDarkBlue" : "bg-customBlue"
          }`}
        >
          <button
            className={`font-bold hover:scale-105 duration-300 text-[9px] md:text-[14px] ml-[12rem] md:ml-[120vh] mt-[25px] md:mt-[19px] ${
              darkMode ? "text-[#8F88FF]" : "text-customLightGreen"
            }`}
            onClick={clickHandle}
          >
            {i18n.language === "en" ? "TÜRKÇE" : "SWITCH"}
            <span
              className={`${darkMode ? "text-gray-500" : "text-customWhite"}`}
            >
              {i18n.language === "en" ? "'YE GEÇ" : " TO ENGLISH"}
            </span>
          </button>

          <div className="mt-[25px] ml-[20px] md:ml-[200px]">
            <h2 className=" text-customLightGreen font-inter font-bold text-l md:text-2xl leading-18">
              {t(`name`)}
            </h2>
          </div>
          <main className="mt-5 md:mt-4 ml-[20px] md:ml-[200px] ">
            <h1 className="text-customLightGreen font-bold text-2xl md:text-5xl  md:mt-[80px]">
              {t(`heroMain`)}
              <br />
              {t(`heroTitle`)}
            </h1>
            <article className="text-customBestWhite font-normal text-l md:text-xl leading-[29.05px] mt-5 mr-5 ">
              {t(`heroText1`)}
              <br /> {t(`heroText2`)}
            </article>
          </main>
          <div className="flex space-x-3 md:mt-[50px] ml-[20px] md:ml-[200px] mr-[70px]">
            <div className=" space-x-[12px] mt-9 flex ">
              <a
                href="https://github.com/EsraSaydan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={` w-[100px] md:w-[127px] hover:scale-105 duration-300 h-[40px] md:h-[52px] rounded-[6px] border  p-[12px 20px 12px 12px] gap-[10px] text-center items-center flex border-customButton text-xs md:text-lg leading-7 font-medium  ${
                    darkMode
                      ? "bg-customDarkSf text-customBestWhite"
                      : "bg-customBestWhite text-customButton"
                  }`}
                >
                  <FaGithub className="w-5 h- ml-3" />
                  {t(`github`)}
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/esra-saydan-53845a218"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={` w-[100px] md:w-[127px] h-[40px] md:h-[52px] hover:scale-105 duration-300 rounded-[6px] border  p-[12px 20px 12px 12px] gap-[10px] text-center items-center flex border-customButton text-xs md:text-lg leading-7 font-medium  ${
                    darkMode
                      ? "bg-customDarkSf text-customBestWhite"
                      : "bg-customBestWhite text-customButton"
                  }`}
                >
                  <FaLinkedinIn className="w-5 h-5 ml-3" />
                  {t(`linkedin`)}
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex ">
            <img
              src={m}
              alt="Profile"
              className="relative z-10 w-[120px] md:w-[350px] h-[290px] md:h-[350px] hover:scale-105 duration-300 object-cover rounded-lg transform translate-x-[265px] md:translate-x-[680px] -translate-y-[300px] md:-translate-y-[348px]"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className={` h-[500px] md:h-[671px] w-1/3 flex absolute text-nowrap   text-[9px] md:text-[14px]  rounded-0 ${
            darkMode ? "bg-customDarkGreen" : "bg-customLightGreen"
          }   `}
        >
          <div className="ml-3 mt-3">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
