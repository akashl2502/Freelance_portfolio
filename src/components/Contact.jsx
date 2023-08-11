import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
const Contact = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    if ((forms.name && forms.email && forms.message).length != 0) {
      const toastId = toast.loading("Sending Email... 🥳");

      emailjs
        .send("service_ff2sf71", "template_y8whfvk", forms, "ZcdMND3IohS_YDujI")
        .then(
          (result) => {
            console.log(result.text);
            // {Autoreply mail}
            // emailjs.send(
            //   "service_ff2sf71",
            //   "template_520qtbj",
            //   {
            //     email: forms.email,
            //   },
            //   "ZcdMND3IohS_YDujI"
            // );
            // {Autoreply mail}
            toast.dismiss(toastId);
            toast.success("Email Sent Succesfully 😀");
            setForms({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
            toast.dismiss(toastId);
            toast.error("Try again Later 😔");
          }
        );
    } else if ((forms.name && forms.email && forms.message).length == 0) {
      toast.error("Please Fill The Neccessary Details ☹️");
    }
  };

  return (
    <section id="contact" className="h-screen w-full bg-[#f2f2f2]">
      <div className="flex container mx-auto justify-center items-center h-full">
        <div className="h-[600px] w-[850px] bg-white ">
          <div className="h-[10%] w-full pt-24 flex justify-center items-center flex-col">
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="text-[2.5rem] mfont font-light uppercase tracking-widest max-sm:text-[2rem]">
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
                name="name"
                value={forms.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-[80%]">
              <input
                className="border rounded-lg w-full py-4 px-10 border-gray-300"
                placeholder="Your Email ID"
                name="email"
                value={forms.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-[80%]">
              <textarea
                className="border rounded-lg w-full py-4 px-10 border-gray-300"
                placeholder="Message"
                name="message"
                value={forms.message}
                onChange={handleChange}
              />
            </div>
            <div className="w-[80%]">
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="border text-white mfont font-extrabold text-xl tracking-widest rounded-lg bg-[#f87c44] w-full py-4 px-10 border-gray-300 hover:border-2 hover:border-[#f87c44] hover:text-black hover:bg-white hover:transition-all hover:ease-in-out hover:duration-700">
                Submit
              </button>
            </div>
          </div>
        </div>
        <Toaster position="bottom-center" reverseOrder="false" />
      </div>
    </section>
  );
};

export default Contact;
