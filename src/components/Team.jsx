import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import "../styles/card.css";
import prasath from "../assets/avatar1.jpg";
import akash from "../assets/avatar2.jpg";
import krithic from "../assets/avatar3.jpg";
import aswath from "../assets/avatar4.jpg";
export const Team = () => {
  return (
    <section id="team" className="h-screen pt-5 max-sm:pt-10 ">
      <div className="h-[10%] container mx-auto w-full pt-24 flex justify-center items-center flex-col gap-1">
        <p
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="text-[2.9rem] mfont font-light uppercase tracking-widest max-sm:text-[2rem]">
          <span>Our</span> <span className="text-[#f87c44]">TEAM</span>
        </p>
        <div className="flex justify-center items-center ">
          <div className="w-[80px] bg-[#f87c44] h-[2px]"></div>
          <div className="text-[2rem] flex justify-center items-center">
            <p>.</p>
          </div>
          <div className="w-[80px] bg-[#f87c44] h-[2px]"></div>
        </div>
        <div className="mfont text-sm w-[40%] text-center max-sm:w-[90%]">
          <p>
            "Meet Our Team: A diverse group of innovative thinkers and
            problem-solvers, each member brings their unique skills and
            expertise to our team. Their collective passion and dedication are
            at the heart of our success."
          </p>
        </div>
      </div>
      <div
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="h-full flex justify-center items-center">
        {" "}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Autoplay]}
          className="card mt-10">
          <SwiperSlide>
            {" "}
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
                <p className="text-white text-sm font-[600] tracking-wider sub">
                  Web AI Architect
                </p>
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
                <p className="text-white text-sm font-[600] tracking-wider sub">
                  Web AI Architect
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="relative w-full h-full">
              <img
                src={krithic}
                alt="Example"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 pb-7 bg-black bg-opacity-50 gap-5 flex-col flex items-center justify-center">
                <p className="text-white text-xl font-extrabold mfont pt-5">
                  Krithicswaroopan
                </p>
                <p className="text-white text-sm font-[600] tracking-wider sub">
                  AI Architect
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="relative w-full h-full">
              <img
                src={aswath}
                alt="Example"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 pb-7 bg-black bg-opacity-50 gap-5 flex-col flex items-center justify-center">
                <p className="text-white text-xl font-extrabold mfont pt-5">
                  Ashwath
                </p>
                <p className="text-white text-sm font-[600] tracking-wider sub">
                  AI Trainee
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
