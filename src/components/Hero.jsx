import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";
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
          <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=1060&t=st=1691484959~exp=1691485559~hmac=e9e826e70bc22afc0e76ae58d3e343be3d1ef2d769cbc6137acb1bcfacd863c5" />
          <div className="flex  flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white text-[3.5rem] absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center max-sm:text-[2rem] ">
              Ultimate Solution for Your <br />
              Website or Landing Page
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <button className="px-8 text-white text-bold py-2 border-2 border-white hover:bg-[#f87c44] hover:transition-all hover:ease-in-out hover:duration-700">
                Get Started ! !
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1060&t=st=1691485309~exp=1691485909~hmac=ee0528d8f23fc84947c12c3e8ca026656054f612257b7f950250b80340f180cb" />
          <div className="flex  flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white max-sm:text-[2rem] text-[3.5rem] absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center h-full ">
              We Promise You'll Be <br />
              Impressed With Crystal
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <button className="px-8 text-white text-bold py-2 border-2 border-white hover:bg-[#f87c44] hover:transition-all hover:ease-in-out hover:duration-700">
                Our Services
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1060&t=st=1691485290~exp=1691485890~hmac=5ce639420b160e21f39217bf98766cdd90a74c76c6527cad206db0873eedf6f4" />
          <div className="flex  flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white max-sm:text-[2rem] text-[3.5rem] absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center h-full ">
              Create Tailwind Powered <br /> Website in Minutes
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <button className="px-8 text-white text-bold py-2 border-2 border-white hover:bg-[#f87c44] hover:transition-all hover:ease-in-out hover:duration-700">
                Our Features
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/turned-gray-laptop-computer_400718-47.jpg?w=1060&t=st=1691485339~exp=1691485939~hmac=3368436703af495fb95bfeb65cba02099875e76ba08e829ebc0781d5bbae951d" />
          <div className="flex  flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white max-sm:text-[2rem] text-[3.5rem] absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center h-full ">
              Innovation Begins Here <br />
              Get to Know Our Crystal Team
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <button className="px-8 text-white text-bold py-2 border-2 border-white hover:bg-[#f87c44] hover:transition-all hover:ease-in-out hover:duration-700">
                Our Team
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
