import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer mt-1 left-[140vh]">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        data-testid="darkMode-toggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <div
        className={`w-11 h-6  rounded-full peer peer-checked:border-customDarkProject peer-focus:ring-4 dark:peer-focus:ring-[#8F88FF] 
        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[
        #8F88FF] after:content-[''] after:absolute after:top-0 md:after:top-0.5 after:start-[2px] after:border-none after:border-gray-300 after:border  after:rounded-full after:h-5 after:w-5 after:transition-all ${
          darkMode ? "bg-[#3A3A3A]" : "bg-[#8F88FF]"
        }`}
      >
        <div
          className={`w-5 h-5 mt-0.5 border-none rounded-full shadow-md transform duration-300 ease-in-out ${
            darkMode
              ? "translate-x-5 bg-[#FFE86E]"
              : "translate-x-1 bg-[#FFE86E]"
          }`}
        ></div>
        {darkMode && (
          <div
            className="absolute w-6 h-4 rounded-full transform translate-x-[17px] -translate-y-[21px]"
            style={{
              clipPath: "circle(50% at 36% 36%)",
              backgroundColor: "#3A3A3A",
            }}
          ></div>
        )}
      </div>
      <span
        className={`ms-3 font-bold hover:scale-105 duration-300 ${
          darkMode ? "text-customLightGreen" : "text-customBlue"
        }`}
      >
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </span>
    </label>
  );
}
