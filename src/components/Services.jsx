import React from "react";
import { MdTabletAndroid } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { FaRobot } from "react-icons/fa";

export default function Services() {
  const arr = [
    {
      id: "app",
      icon: <MdTabletAndroid size={30} color="#f87c44" />,
      heading: "App Development",
      sub: "Our team excels in creating innovative apps designed to provide a seamless user experience and achieve your business goals.",
    },
    {
      id: "web",
      icon: <BsGlobe size={30} color="#f87c44" />,
      heading: "Web Development",
      sub: "Using the latest web technologies and frameworks, we deliver high-performance web solutions that enhance your online presence.",
    },
    {
      id: "game",
      icon: <FaGamepad size={30} color="#f87c44" />,
      heading: "Game Development",
      sub: "Our game development team combines creativity and technical expertise to design high-quality games across multiple platforms.",
    },

    {
      id: "graphic",
      icon: <MdGraphicEq size={30} color="#f87c44" />,
      heading: "Graphic Designing",
      sub: "We offer creative graphic design solutions that effectively communicate your brand's message and resonate with your target audience.",
    },
    {
      id: "3D Modelling",
      icon: <RxDimensions size={30} color="#f87c44" />,
      heading: "3D-Modelling",
      sub: "From architectural renderings to product prototypes, our 3D modeling services help visualize your ideas with precision and detail.",
    },
    {
      id: "AI Development",
      icon: <FaRobot size={30} color="#f87c44" />,
      heading: "AI Development",
      sub: "We offer cutting-edge AI solutions that empower businesses, optimize processes, and deliver superior customer experiences.",
    },
  ];

  return (
    <section id="service" className="h-screen w-full max-sm:overflow-auto">
      <div className="h-[10%] container mx-auto w-full flex justify-center items-center flex-col gap-1 max-sm:h-[20%]">
        <p
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="text-[2.9rem] mfont font-light uppercase tracking-widest max-sm:text-[2rem]">
          <span>Our</span> <span className="text-[#f87c44]">Services</span>
        </p>
        <div className="flex justify-center items-center ">
          <div className="w-[80px] bg-[#f87c44] h-[2px]"></div>
          <div className="text-[2rem] flex justify-center items-center">
            <p>.</p>
          </div>
          <div className="w-[80px] bg-[#f87c44] h-[2px]"></div>
        </div>
        <div className="mfont text-sm">
          <p>Transforming Ideas into Reality: Our Comprehensive Services</p>
        </div>
      </div>
      <div className="h-[100%] mt-12 w-full grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-sm:h-full max-sm:mt-0">
        {arr.map((item) => {
          return (
            <div
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="h-[300px]  w-full flex justify-center items-center flex-col gap-5 hover:bg-white hover:shadow-xl hover:rounded-xl">
              <div className="h-[80px] w-[80px] border border-[#f87c44] rounded-xl flex justify-center items-center">
                {item.icon}
              </div>
              <div>
                <p
                  className="
                text-[1.3rem] mfont font-extrabold">
                  {item.heading}
                </p>
              </div>
              <div>
                <p
                  className="
                text-xs mfont font-light px-20 text-center">
                  {item.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
