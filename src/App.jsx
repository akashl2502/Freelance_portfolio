import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Features from "./components/Features";
import { Works } from "./components/Works";
import { Team } from "./components/Team";
import Contact from "./components/Contact";
import { Info } from "./components/Info";
import Single from "./components/Single";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Info />
      <Works />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
