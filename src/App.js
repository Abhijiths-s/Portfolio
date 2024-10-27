import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Intro1 from "./components/Intro1";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);



  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Updates scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);


  return (
    <Router>
      <div>
        <Header mode={mode} toggle={togglemode} scroll={scrollY}/>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Define sections with corresponding IDs */}
                <section id="home">
                  <Intro1 mode={mode} />
                </section>
                <div className={`${mode === "dark" ? "bg-gray-900" : "bg-[#CDF5FD]"}`}>
                <Intro mode={mode} />
                <section id="about">
                  <About mode={mode} />
                </section>
                <section id="skills">
                  <Skills mode={mode} />
                </section>
                <section id="contact">
                  <Contact mode={mode} />
                </section>
                </div>
              </>
            }
          />
        </Routes>

        <Footer mode={mode} />
        
      </div>
    </Router>
  );
}

export default App;
