import React from "react";
import CompanyMilestones from "../components/CompanyMilestones";
import ClientLogos from "../components/ClientLogos";
import { purpleVector, mainImage, percentageIcon } from "../assets";
import OurStory from "../components/ourstory";
import TestimonialsSection from "../components/TestimonialsSection";
import HowWeDidIt from "../components/HowWeDidIt";
import JoinCommunityAbout from "../components/JoinCommunityAbout";

const AboutUs = () => {
  return (
    <section className="bg-white pb-16 px-5 md:px-16">
      <main className="w-full py-8">
        {/* Timeline Line */}
        <div className="relative pb-20">
          <div className="absolute left-0.5 md:left-8  top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 md:block" />

          <div>
            <div className="ml-5">
              {/* Section Title */}
              <div className="mb-6 flex gap-3 flex-col md:flex-row">
                <img src={purpleVector} alt="Decorative Vector" className="w-20 relative -left-8" />
                <h2 className="text-[20px] font-semibold uppercase text-[#F3BC4C]">
                  About Us
                </h2>
              </div>

              {/* Content Layout */}
              <div className="w-full flex flex-col md:flex-row justify-between gap-8 ">
                {/* Text Section */}
                <div className="w-full md:w-full pl-0 md:pl-10 flex flex-col justify-between">
                  <h3 className="mb-4 text-[26px] md:text-[32px] md:max-w-[70%] font-semibold text-[#3D3D3D] leading-[1.4] md:px-10">
                    For more than ten years, we've collaborated with industry
                    pioneers to swiftly expand their teams and address their
                    business obstacles.
                  </h3>

                  <div className="flex flex-col-reverse md:flex-row md:items-center">
                    <div className="w-full md:w-full">
                      <p className="text-[#3D3D3D] text-[18px] md:text-[20px] font-semibold leading-8 px-0 md:px-10">
                        At Nershore.io, we are driven by the belief that
                        technology can transform businesses and elevate their
                        potential. Founded in [Year], we have been on a mission to
                        empower organizations with innovative solutions that drive
                        growth, efficiency, and success.
                      </p>
                    </div>
                    {/* Image Section */}
                    <div className="w-full md:w-[30%]">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={mainImage}
                          alt="Team collaboration"
                          className="md:w-full h-auto w-[85%] mx-auto"
                        />
                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <OurStory />
        <ClientLogos />
        <TestimonialsSection />
        <HowWeDidIt />

        <div className="relative w-full px-10 md:px-20 pb-40">
          <div className='absolute pt-16 ml-6 z-10 -top-16 md:top-3 -left-[28px] md:left-[1px]'>
            <div className='w-4 h-4 rounded-full bg-gradient-to-l from-[#3171DE] to-[#704AF2]'></div>
          </div>
          <div className='absolute left-0.5 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 ' />
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <h2 className="flex-1 text-2xl font-medium max-w-[663px]">All of this has helped us achieve an industry-leading customer satisfaction score of 91% and an average client relationship of over 3 years.
            </h2>
            <img className="" src={percentageIcon} alt="" />
          </div>
        </div>

        <JoinCommunityAbout/>

        
      </main>
    </section>
  );
};

export default AboutUs;
