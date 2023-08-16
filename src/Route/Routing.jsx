import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import SplashScreen from "../components/SplashScreen";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<SplashScreen />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  );
};

export default Routing;
