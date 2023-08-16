import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/1.png";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/app");
    }, 2500);
  }, [navigate]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-full w-full flex justify-center items-center">
        {" "}
        <img
          className="h-[250px] w-[250px] animate-bounce"
          src={logo}
          alt="Brand Logo"
        />
      </div>
    </div>
  );
}

export default SplashScreen;
