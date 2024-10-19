import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Intro1 from "./components/Intro1";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("dark");

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <Router>
      <div>
        <Header mode={mode} toggle={togglemode}/>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Define sections with corresponding IDs */}
                <section id="home">
                  <Intro1 mode={mode} />
                </section>
                <section id="about">
                  <Intro mode={mode} />
                </section>
                <section id="skills">
                  <Skills mode={mode} />
                </section>
                <section id="contact">
                  <Contact mode={mode} />
                </section>
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