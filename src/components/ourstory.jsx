import { award, intersect } from "../assets";
import { lemonVector } from "../assets";
import CompanyMilestones from "./CompanyMilestones";

const OurStory = () => {
  return (
    <div className="relative">
      <div className="ml-5">
        {/* Section Marker */}
        <div className="absolute left-0.5 md:left-8 top-20 h-full bottom-0 w-0.5 bg-gradient-to-b from-[#3171DE] to-[#704AF2] block" />
        <div className="flex gap-3 flex-col md:flex-row">
          <img src={lemonVector} alt="Decorative Vector" className="w-20 relative -left-8" />
          <h2 className="text-[20px] font-semibold uppercase text-[#F3BC4C]">
            Our Story
          </h2>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 pb-30 md:pb-5">
          <div className="w-full md:w-[70%] ">
            <p className="text-[18px] md:text-[20px] font-semibold pt-10  md:px-20 leading-8 text-[#3D3D3D]">
              Our journey began when a group of passionate technologists saw the
              untapped potential of technology to revolutionize industries. With
              a shared vision, we embarked on a mission to bridge the gap
              between cutting-edge technology and businesses seeking to harness
              its power. Over the years, we have evolved into a team of experts   n 
              who thrive on challenges, creativity, and collaboration.
            </p>
          </div>

          <div className="hidden md:block w-full md:w-[30%]">
            <div className="relative overflow-hidden rounded-lg px-10">
              <img src={intersect} alt="Team meeting" className="" />
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section className="mb-12 md:mb-24 relative pb-20 md:pb-5">
          <div className="absolute ml-1 z-10 top-2 -left-[28px] md:left-[1px]">
            <div className="w-4 h-4 rounded-full bg-gradient-to-l from-[#3171DE] to-[#704AF2]"></div>
          </div>

          <div className="md:ml-20 mb-6 md:mb-8">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-[#3D3D3D]">
              Since then...
            </h2>
          </div>

          <div className="md:ml-20 flex flex-col md:flex-row gap-3">
            <div className="max-w-xl">
              <h3 className="text-[24px] md:text-[32px] font-semibold leading-[1.4] text-[#3D3D3D] mb-4">
                We've completed more than 1,200 projects for over 500 distinct
                enterprises.
              </h3>
            </div>
            <div className="flex-shrink-0">
              <img src={award} alt="Award" className="w-16 md:w-auto" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12 md:mb-24 relative">
          <div className="absolute ml-1 z-10 top-2 -left-[28px] md:left-[1px]">
            <div className="w-4 h-4 rounded-full bg-gradient-to-l from-[#3171DE] to-[#704AF2]"></div>
          </div>

        </section>
        <div className="px-4 md:px-20 w-full">
          <h3 className="text-[24px] md:text-[32px] font-semibold leading-[1.4] text-[#3D3D3D] mb-0 md:mb-12">
            Every year, our software developers, QA engineers, designers, and
            project managers work on hundreds of exciting projects...
          </h3>
          <CompanyMilestones />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
