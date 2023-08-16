import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Routing from "./Route/Routing.jsx";

AOS.init({
  duration: 2000,
  easing: "ease-in-sine",
  disable: function () {
    return window.innerWidth < 768; // disable AOS if window width is less than 768px
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
