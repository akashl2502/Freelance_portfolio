import React, { useState } from "react";
import { FcContacts } from "react-icons/fc";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
import "./single.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import prasath from "../assets/avatar1.jpg";
import akash from "../assets/avatar2.jpg";
import krithic from "../assets/avatar3.jpg";
import aswath from "../assets/avatar4.jpg";
const Single = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="h-screen transition-all duration-700 ease-in-out">
      {" "}
      <div
        onClick={() => setClick(!click)}
        className={`${
          click
            ? "fixed left-0 top-[30%]   h-[350px] w-[50px] flex justify-center items-center transition-all duration-700 ease-in-out"
            : "fixed left-0 top-[30%]  bg-zinc-300 h-[50px] w-[50px] flex justify-center items-center transition-all duration-700 ease-in-out"
        }`}>
        <FcContacts className="animate-bounce" size={25} />
        {click ? (
          <div className="h-full w-full flex flex-col-reverse justify-end  transition-all duration-700 ease-in-out">
            {" "}
            <div className="h-[330px] w-[320px] bg-slate-100 shadow-lg ">
              <Swiper
                modules={[Pagination, Autoplay]}
                className="single"
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}>
                <SwiperSlide className="bg-white h-full ">
                  <div className="relative w-full h-full">
                    <img
                      src={prasath}
                      alt="Example"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 pb-7 bg-black bg-opacity-50 gap-5 flex-col flex items-center justify-center">
                      <p className="text-white text-xl font-extrabold mfont pt-5">
                        Prasath
                      </p>
                      <div className="flex justify-evenly w-full">
                        <div>
                          <BsLinkedin color="white" />
                        </div>
                        <div>
                          <FaStackOverflow color="white" />
                        </div>
                        <div>
                          <BsGithub color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="relative w-full h-full">
                    <img
                      src={akash}
                      alt="Example"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 pb-7 bg-black bg-opacity-50 gap-5 flex-col flex items-center justify-center">
                      <p className="text-white text-xl font-extrabold mfont pt-5">
                        Akash
                      </p>
                      <div className="flex justify-evenly w-full">
                        <div>
                          <BsLinkedin color="white" />
                        </div>
                        <div>
                          <FaStackOverflow color="white" />
                        </div>
                        <div>
                          <BsGithub color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="relative w-full h-full">
                    <img
                      src={krithic}
                      alt="Example"
                      className="w-full h-full "
                    />
                    <div className="absolute inset-x-0 bottom-0 pb-7 bg-black bg-opacity-50 gap-5 flex-col flex items-center justify-center">
                      <p className="text-white text-xl font-extrabold mfont pt-5">
                        Krithicswaroopan
                      </p>
                      <div className="flex justify-evenly w-full">
                        <div>
                          <BsLinkedin color="white" />
                        </div>
                        <div>
                          <FaStackOverflow color="white" />
                        </div>
                        <div>
                          <BsGithub color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="relative w-full h-full">
                    <img
                      src={aswath}
                      alt="Example"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 pb-7 bg-black bg-opacity-50 gap-5 flex-col flex items-center justify-center">
                      <p className="text-white text-xl font-extrabold mfont pt-5">
                        Aswath
                      </p>
                      <div className="flex justify-evenly w-full">
                        <div>
                          <BsLinkedin color="white" />
                        </div>
                        <div>
                          <FaStackOverflow color="white" />
                        </div>
                        <div>
                          <BsGithub color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="fixed left-80 top-[30%]  bg-zinc-300 h-[50px] w-[50px] flex justify-center items-center">
              {" "}
              <FcContacts className="animate-bounce" size={25} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Single;
