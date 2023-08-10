import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { PiDevicesBold } from "react-icons/pi";
import { FaReact, FaUserCheck } from "react-icons/fa";
import { ImMagicWand } from "react-icons/im";
import { TbAbc } from "react-icons/tb";
const Features = () => {
  const features = [
    {
      id: "tailwind",
      icon: <SiTailwindcss size={30} />,
      heading: "Tailwind Based",
      sub: "Enjoy the benefits of 'Just-In-Time' (JIT) mode with Tailwind CSS, enabling on-demand extraction of your CSS, boosting speed and performance.",
    },
    {
      id: "res",
      icon: <PiDevicesBold size={30} />,
      heading: "Fully Responsive",
      sub: "Our platform is fully responsive, offering an optimal viewing and interaction experience across all devices.",
    },
    {
      id: "react",
      icon: <FaReact size={30} />,
      heading: "React",
      sub: "Leveraging the power of ReactJS, our platform enables the development of dynamic and interactive UIs for a superior user experience.",
    },
    {
      id: "rich",
      icon: <ImMagicWand size={30} />,
      heading: "Feature Rich Section",
      sub: "Our product is designed with feature-rich sections, each meticulously tailored to provide comprehensive solutions for your needs.",
    },
    {
      id: "ajax",
      icon: <TbAbc size={30} />,
      heading: "AJAX Contact Form",
      sub: "Our Ajax Contact Form provides a smooth, seamless user experience, eliminating page refreshes and offering instant form submission feedback.",
    },
    {
      id: "user",
      icon: <FaUserCheck size={30} />,
      heading: "User Friendly",
      sub: "Our platform features a user-friendly layout, making navigation through various sections a breeze for users of all levels.",
    },
  ];

  return (
    <section id="feature" className="h-screen mt-40 w-full max-sm:mt-0">
      <div className="h-full container mx-auto flex flex-col justify-center items-center">
        <p className="text-[2.1rem] mfont font-light uppercase tracking-widest max-sm:text-[1.5rem] ">
          <span>Amazing</span>
          <span className="text-[#f87c44] pl-5">Features</span>
        </p>
        <div className="flex justify-center items-center ">
          <div className="w-[80px] bg-[#f87c44] h-[2px]"></div>
          <div className="text-[2rem] flex justify-center items-center">
            <p>.</p>
          </div>
          <div className="w-[80px] bg-[#f87c44] h-[2px]"></div>
        </div>
        <div className="mfont text-sm">
          <p>
            Equipped with cutting-edge technology, our product offers unrivaled
            performance and efficiency
          </p>
        </div>
        <div className="h-full w-full flex justify-center items-center px-14 max-sm:flex-col max-sm:overflow-auto max-sm:overflow-x-hidden max-sm:justify-start max-sm:pt-10">
          <div className="flex flex-col gap-9">
            {features.slice(0, 3).map((item) => {
              return (
                <div className="flex justify-center items-center gap-6">
                  <div className="flex flex-col gap-3  ">
                    <div className=" text-right">
                      <p className="font-bold text-[1.3rem] sub tracking-widest uppercase">
                        {item.heading}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm  font-light mfont">{item.sub}</p>
                    </div>
                  </div>
                  <div className="h-[50px] hover:bg-[#f87c44] hover:border-white hover:cursor-pointer hover:text-white flex justify-center items-center w-[50px] rounded-lg border border-[#f87c44]">
                    <p className="text-[#f87c44] hover:text-white h-[50px] w-[50px] flex justify-center items-center">
                      {item.icon}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-full w-full flex justify-center items-center max-sm:hidden">
            <img
              className="h-[300px] w-[300px] mix-blend-color-burn"
              src="https://img.freepik.com/free-vector/features-overview-concept-illustration_114360-1500.jpg?w=740&t=st=1691499633~exp=1691500233~hmac=4884f9c96d42d4d8ccbdee7bc3e4c07b42dc54069a68f02c0c3033f2ea09a22b"
            />
          </div>
          <div className="flex flex-col gap-9">
            {features.slice(3, 7).map((item) => {
              return (
                <div className="flex flex-row-reverse justify-center items-center gap-6">
                  <div className="flex flex-col gap-3  ">
                    <div className=" text-left">
                      <p className="font-bold text-[1.3rem] sub tracking-widest uppercase">
                        {item.heading}
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-sm  font-light mfont">{item.sub}</p>
                    </div>
                  </div>
                  <div className="h-[50px] hover:bg-[#f87c44] hover:border-white hover:cursor-pointer hover:text-white flex justify-center items-center w-[50px] rounded-lg border border-[#f87c44]">
                    <p className="text-[#f87c44] hover:text-white h-[50px] w-[50px] flex justify-center items-center">
                      {item.icon}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
