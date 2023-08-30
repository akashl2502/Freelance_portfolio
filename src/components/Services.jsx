import React from "react";
import { MdTabletAndroid } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { FaRobot } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { MdContentPasteSearch } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { TbSeo } from "react-icons/tb";
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
      id: "digital_marketing",
      icon: <HiSpeakerphone size={30} color="#f87c44" />,
      heading: "Digital Marketing",
      sub: "Our Digital marketing team employs innovative strategies to enhance your online presence and reach your target audience effectively.",
    },

    {
      id: "social_media",
      icon: <SlSocialInstagram size={30} color="#f87c44" />, // Assuming you'd want to use the FaRegThumbsUp icon as a representation for social media; otherwise, you'd choose an appropriate icon for social media management.
      heading: "Social Media Management",
      sub: "Our Team specializes in crafting and executing effective social media strategies to amplify your online presence and engage your audience.",
    },
    {
      id: "seo",
      icon: <TbSeo size={30} color="#f87c44" />, // Assuming you'd want to use the FaSearchDollar icon as a representation for SEO; otherwise, you'd choose an appropriate icon for SEO.
      heading: "SEO",
      sub: "Boost your website's visibility and rank higher on search engines with our comprehensive SEO strategies and techniques.",
    },
    {
      id: "content_creation",
      icon: <MdContentPasteSearch size={30} color="#f87c44" />, // Assuming you'd want to use a hypothetical TbContentCreation icon as a representation for Content Creation; you'd need to replace this with an appropriate icon if it doesn't exist.
      heading: "Content Creation",
      sub: "Elevate your brand's voice with compelling and authentic content crafted by our dedicated content creation team.",
    },

    // {
    //   id: "AI Development",
    //   icon: <FaRobot size={30} color="#f87c44" />,
    //   heading: "AI Development",
    //   sub: "We offer cutting-edge AI solutions that empower businesses, optimize processes, and deliver superior customer experiences.",
    // },
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
