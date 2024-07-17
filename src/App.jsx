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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [allData, setAllData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios
      .post("https://reqres.in/api/users", i18n)
      .then(function (response) {
        console.log("response", response);
        setAllData(response.data);
        toast.success("successfully!");
      })
      .catch(function (error) {
        console.error("error", error);
        toast.error("An error occurred, try again..");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Loading göstergesi oluşturma
  const Loading = () => (
    <div className="loading">
      <p>Loading...</p>
    </div>
  );

  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        <div className="App">
          <ToastContainer /> {/* Toastify konteyneri ekleyin */}
          {loading ? (
            <Loading />
          ) : (
            <>
              <Hero />
              <Skills />
              <Profile />
              <Projects />
              <Footer />
            </>
          )}
        </div>
      </LanguageContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
