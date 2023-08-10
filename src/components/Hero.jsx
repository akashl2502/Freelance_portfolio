import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-scroll";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
function Hero() {
  return (
    <section id="home" className="h-screen w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          enabled: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper ">
        <SwiperSlide className="relative">
          <img src={img1} />
          <div className="flex  flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white text-[3.5rem] absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center max-sm:text-[2rem] ">
              Ultimate Solution for Your <br />
              Website or Landing Page
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <Link
                className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer "
                spy={true}
                to="contact"
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}>
                <button className="px-8 text-white text-bold py-2 border-2 border-white hover:bg-[#f87c44] hover:transition-all hover:ease-in-out hover:duration-700">
                  Get Started ! !
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <div className="flex  flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white max-sm:text-[2rem] text-[3.5rem] absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center h-full ">
              We Promise You'll Be <br />
              Impressed With Crystal
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <Link
                className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer"
                spy={true}
                to="service"
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}>
                <button className="px-8 text-white text-bold py-2 border-2 border-white hover:bg-[#f87c44] hover:transition-all hover:ease-in-out hover:duration-700">
                  Our Services
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <div className="flex  flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white max-sm:text-[2rem] text-[3.5rem] absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center h-full ">
              Create Tailwind Powered <br /> Website in Minutes
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <Link
                className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer"
                spy={true}
                to="feature"
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}>
                <button className="px-8 text-white text-bold py-2 border-2 border-white hover:bg-[#f87c44] hover:transition-all hover:ease-in-out hover:duration-700">
                  Our Features
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <div className="flex  flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white max-sm:text-[2rem] text-[3.5rem] absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center h-full ">
              Innovation Begins Here <br />
              Get to Know Our Crystal Team
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <Link
                className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
                spy={true}
                to="team"
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}>
                <button className="px-8 text-white text-bold py-2 border-2 border-white hover:bg-[#f87c44] hover:transition-all hover:ease-in-out hover:duration-700">
                  Our Team
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
