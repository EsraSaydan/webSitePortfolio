import React, { useEffect, useState } from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContextProvider } from "./contexts/LanguageContext";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import i18n from "./i18n";
import axios from "axios";

function App() {
  const [allData, setAllData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .post("https://reqres.in/api/users", i18n)
      .then(function (response) {
        console.log(response);
        setAllData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        <div className="App">
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </LanguageContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
