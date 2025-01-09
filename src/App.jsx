import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import ContactLinks from "./components/ContactLinks";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ContactLinks />
      </Router>
    </>
  );
}

export default App;
