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
      <Router basename="/the-bright-future-academy">
        <Navbar />
        <ContactLinks />
        <div className="BodyContainer">
          <Info />
          <IntroVideo />
          <Aboutus />
        </div>
      </Router>
    </>
  );
}

export default App;
