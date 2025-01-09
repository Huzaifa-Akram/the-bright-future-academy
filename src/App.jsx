import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import ContactLinks from "./components/ContactLinks";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Router basename="/the-bright-future-academy">
        <Navbar />
        <ContactLinks />
        <div className="BodyContainer">
          <Info />
        </div>
      </Router>
    </>
  );
}

export default App;
