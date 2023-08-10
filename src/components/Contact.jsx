import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="h-screen w-full bg-[#f2f2f2]">
      <div className="flex container mx-auto justify-center items-center h-full">
        <div className="h-[600px] w-[850px] bg-white ">
          <div className="h-[10%] w-full pt-24 flex justify-center items-center flex-col">
            <p className="text-[2.5rem] mfont font-light uppercase tracking-widest max-sm:text-[2rem]">
              <span>Contact</span> <span className="text-[#f87c44]">Us</span>
            </p>
            <div className="flex justify-center items-center ">
              <div className="w-[80px] bg-[#f87c44] h-[2px]"></div>
              <div className="text-[2rem] flex justify-center items-center">
                <p>.</p>
              </div>
              <div className="w-[80px] bg-[#f87c44] h-[2px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full justify-center items-center h-[90%] ">
            <div className="w-[80%]">
              <input
                className="border rounded-lg w-full py-4 px-10 border-gray-300"
                placeholder="Your Name"
              />
            </div>
            <div className="w-[80%]">
              <input
                className="border rounded-lg w-full py-4 px-10 border-gray-300"
                placeholder="Email ID"
              />
            </div>
            <div className="w-[80%]">
              <textarea
                className="border rounded-lg w-full py-4 px-10 border-gray-300"
                placeholder="Message"
              />
            </div>
            <div className="w-[80%]">
              <button className="border text-white mfont font-extrabold text-xl tracking-widest rounded-lg bg-[#f87c44] w-full py-4 px-10 border-gray-300 hover:border-2 hover:border-[#f87c44] hover:text-black hover:bg-white hover:transition-all hover:ease-in-out hover:duration-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
