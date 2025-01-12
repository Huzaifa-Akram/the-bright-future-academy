import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import ContactLinks from "./components/ContactLinks";
import Info from "./components/Info";
import IntroVideo from "./components/IntroVideo";
import Aboutus from "./components/Aboutus";
import Courses from "./components/Courses";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ContactLinks />

        <Routes>
          <Route
            path="/"
            element={
              <div className="BodyContainer">
                <section id="home">
                  <Info />
                </section>
                <IntroVideo />
                <section id="about-us">
                  <Aboutus />
                </section>
                <section id="courses">
                  <Courses />
                </section>
              </div>
            }
          />

          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
