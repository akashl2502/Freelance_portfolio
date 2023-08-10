import React, { useState } from "react";

export const Works = () => {
  const [all, setAll] = useState(true);
  const [app, setApp] = useState(false);
  const [web, setWeb] = useState(false);

  const All = [
    {
      all: [
        "https://img.freepik.com/free-vector/workout-tracker-app-interface_23-2148653679.jpg?w=1060&t=st=1691502912~exp=1691503512~hmac=c7fe6bd30bfb48175beed08a8322bb5160f3561ec04c1ce08a5e55f0c6142942",
        "https://img.freepik.com/premium-vector/www-icon_23-2147929410.jpg?w=740",
      ],
    },
    {
      apps: [
        "https://img.freepik.com/free-vector/workout-tracker-app-interface_23-2148653679.jpg?w=1060&t=st=1691502912~exp=1691503512~hmac=c7fe6bd30bfb48175beed08a8322bb5160f3561ec04c1ce08a5e55f0c6142942",
      ],
    },
    {
      webs: [
        "https://img.freepik.com/premium-vector/www-icon_23-2147929410.jpg?w=740",
      ],
    },
  ];

  return (
    <section id="work" className="h-screen w-full  bg-[#f2f2f2] max-sm:pt-5">
      <div className="h-[10%] container mx-auto w-full pt-24 flex justify-center items-center flex-col gap-1">
        <p
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="text-[2.9rem] mfont font-light uppercase tracking-widest max-sm:text-[2rem]">
          <span>Our</span> <span className="text-[#f87c44]">Works</span>
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
            From initial concept to final execution, our work encapsulates our
            ethos of excellence and attention to detail.
          </p>
        </div>
      </div>
      <div className="flex items-center h-[35%] justify-center w-full justify-evenly mt-6">
        <button
          onClick={() => {
            setAll(!all);
            setApp(false);
            setWeb(false);
          }}
          className={`px-8 py-2 mfont font-black tracking-widest rounded-md  ${
            all
              ? "border-2 border-[#f87c44] bg-white text-[#f87c44]"
              : "text-white bg-[#f87c44] hover:border-2 hover:transition-all hover:ease-in-out hover:duration-300 hover:border-[#f87c44] hover:bg-white hover:text-[#f87c44]"
          }`}>
          All
        </button>
        <button
          onClick={() => {
            setApp(!app);
            setAll(false);
            setWeb(false);
          }}
          className={`px-8 py-2 mfont font-black tracking-widest rounded-md  ${
            app
              ? "border-2 border-[#f87c44] bg-white text-[#f87c44]"
              : "text-white bg-[#f87c44] hover:border-2 hover:transition-all hover:ease-in-out hover:duration-300 hover:border-[#f87c44] hover:bg-white hover:text-[#f87c44]"
          }`}>
          App
        </button>
        <button
          onClick={() => {
            setWeb(!web);
            setAll(false);
            setApp(false);
          }}
          className={`px-8 py-2 mfont font-black tracking-widest rounded-md  ${
            web
              ? "border-2 border-[#f87c44] bg-white text-[#f87c44]"
              : "text-white bg-[#f87c44] hover:border-2 hover:transition-all hover:ease-in-out hover:duration-300 hover:border-[#f87c44] hover:bg-white hover:text-[#f87c44]"
          }`}>
          Web
        </button>
      </div>
      <div className="overflow-auto max-h-[270px] mr-8 z-[-1]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 w-full">
          {all
            ? All[0].all.map((image) => (
                <div className=" rounded  overflow-hidden">
                  <img src={image} className="w-full h-auto" />
                </div>
              ))
            : app
            ? All[1].apps.map((image) => (
                <div className=" rounded overflow-hidden">
                  <img src={image} className="w-full h-auto" />
                </div>
              ))
            : web
            ? All[2].webs.map((image) => (
                <div className=" rounded overflow-hidden">
                  <img src={image} className="w-full h-auto" />
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};