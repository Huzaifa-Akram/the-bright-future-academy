import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import ContactLinks from "./components/ContactLinks";
import Info from "./components/Info";
import IntroVideo from "./components/IntroVideo";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ContactLinks />
        <div className="BodyContainer">
          <section id="home">
            <Info />
          </section>
          <IntroVideo />
          <section id="about-us">
            <Aboutus />
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;