// src/App.js
import React, { useState, useEffect } from "react";

import "./App.css"; // Global styles for themes
import Navbar from "./Component/Navbar";
import Pricing from "./Component/PricingSection";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Pricing />
    </div>
  );
};

export default App;
