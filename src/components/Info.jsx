import React from "react";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
export const Info = () => {
  return (
    <div className="h-[50vh] mt-10">
      <div className="h-full w-full">
        <div className="h-full w-full glass-pane relative">
          <div className="flex justify-evenly items-center h-full absolute w-full">
            <div className="flex justify-center items-center gap-5">
              <div className="flex flex-col gap-1 text-center">
                <div>
                  <p className="font-extrabold mfont tracking-widest text-white text-[3.5rem]">
                    100
                  </p>
                </div>
                <div>
                  <p className="font-extrabold mfont tracking-wider text-white text-[1.5rem]">
                    Cup of Coffee
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center h-full">
                <BiSolidCoffeeTogo size={70} color="white" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="flex flex-col gap-1 text-center">
                <div>
                  <p className="font-extrabold mfont tracking-widest text-white text-[3.5rem]">
                    40 +
                  </p>
                </div>
                <div>
                  <p className="font-extrabold mfont tracking-wider text-white text-[1.5rem]">
                    Active Clients
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center h-full">
                <FaUserSecret size={70} color="white" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="flex flex-col gap-1 text-center">
                <div>
                  <p className="font-extrabold mfont tracking-widest text-white text-[3.5rem]">
                    70 +
                  </p>
                </div>
                <div>
                  <p className="font-extrabold mfont tracking-wider text-white text-[1.5rem]">
                    Project Counts
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center h-full">
                <AiOutlineFundProjectionScreen size={70} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
