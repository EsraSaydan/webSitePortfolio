import React from "react";
import { FaTwitter, FaCodepen, FaAt, FaInstagram } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const icons = [
    {
      icon: <FaTwitter />,
      href: "https://twitter.com",
    },
    {
      icon: <FaCodepen />,
      href: "https://codepen.io",
    },
    {
      icon: <FaAt />,
      href: "mailto:esracarturk.77@gmail.com",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
    },
  ];

  return (
    <div
      className={`flex items-center justify-center h-[470px] ${
        darkMode ? "bg-customDarkSf" : "bg-customWhite"
      }`}
    >
      <div className="text-center">
        <h1
          className={`text-5xl font-bold mb-12 ${
            darkMode ? "text-[#8F88FF]" : "text-customBlue"
          }`}
        >
          {t(`footer`)}
        </h1>
        <p
          className={`mt-2 ${
            darkMode ? "text-customBestWhite" : "text-[#120B39]"
          }`}
        >
          {t(`footerText`)}
          <br /> {t(`footerText1`)}
        </p>
        <p
          className={`mt-6 ${darkMode ? "text-[#8F88FF]" : "text-customBlue"}`}
        >
          <a
            href="mailto:esracarturk.77@gmail.com"
            className={`${
              darkMode ? "text-[#8F88FF]" : "text-customBlue"
            } underline`}
          >
            {t(`mail`)}
          </a>
        </p>
        <div className="mt-6 flex justify-center space-x-4 text-2xl">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`  hover:scale-105 duration-300 ${
                darkMode ? "text-[#8F88FF]" : "text-customBlue"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
