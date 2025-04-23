import React from "react";
import { blueGradientVector, crescentShape, logoAlt, yellowGreenVector } from "../assets";
import { Button, StackSelector } from "../components";
import { challenge } from ".";
import ScheduleCallHome from "../components/scheduleCall";
// import ServicesSection from "../components/ServicesSection";
// import LatestInsights from "../components/LatestInsights";
import FormYourCrew from "../components/FormYourCrew";
import { services } from "./Service";
import InfoCard from "../components/infoCard";
import { blogs } from "../components/blog/BlogHighlights";
import Blog from "../components/blog/Blog";
import TrustedBy from "../components/TrustedBy";

export default function Home() {
  return (
    <div className="mb-5">
      {/* Hero Section */}
      {/* <div className="relative w-full h-screen px-10">
        <img
          src={heroImg}
          alt="../assets/Hero.mp4"
          // className="absolute inset-x-0 px-10 object-cover z-[-1]"
          className="absolute top-0 left-0 px-10 object-cover z-[-1]"
        />

        <div className="flex flex-col gap-y-5 p-10">
          <img
            src={logoAlt}
            alt="logo"
            className="w-[133px] h-[68px] ml-auto"
          />

          <div className="flex flex-col gap-y-5 text-white">
            <h3 className="font-roboto-flex font-semibold text-xl tracking-[10%] leading-[100%]">
              TEDLABS
            </h3>
            <h1 className="max-w-[490px] w-full font-medium text-[64px] leading-[80px] tracking-[0%]">
              TechSynergy: Innovate, Create, Elevate
            </h1>
            <h3 className="font-medium text-xl leading-[100%]">
              Unlocking Possibilities, One Code at a Time
            </h3>
          </div>

          <div>
            <Button text={"See Projects"} />
          </div>
        </div>

        <div className="flex flex-col w-auto gap-y-1 absolute -bottom-[165px] right-10">
          <Button text={"Schedule a Meeting"} className={"py-1 px-24"} />
          <Button text={"Schedule a Call"} className={"py-1 px-24"} />
        </div>
      </div> */}
      <div className="md:px-5 overflow-hidden pb-20 md:pb-0">
        <div className="relative w-full h-fit  md:h-screen md:px-10 rounded-[30px] md:rounded-[40px] flex flex-col pt-20 justify-start ">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-[-2] rounded-[30px] md:rounded-[40px]"
          >
            <source src="/videos/HeroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black/70 z-[-1] rounded-[30px] md:rounded-[40px]"></div>

          <div className="flex flex-row-reverse justify-between w-full">
            <img src={logoAlt} alt="logo" className="w-[133px] h-[68px] ml-auto hidden md:block" />
            <div className="relative flex flex-col px-5 gap-y-5 p-10 text-white">

              <h3 className="font-roboto-flex font-semibold text-[24px] tracking-[10%] leading-[100%] bg-gradient-to-b from-white from-55% to-primary  bg-clip-text text-transparent">
                TEDLABS
              </h3>
              <h1 className="md:max-w-[490px] w-full font-medium text-[40px] md:text-[64px] md:leading-[80px] tracking-[0%]">
                TechSynergy: Innovate, Create, Elevate
              </h1>
              <h3 className="font-medium text-[14px] md:text-xl leading-[100%]">
                Unlocking Possibilities, One Code at a Time
              </h3>

              {/* Button */}
              <div>
                <Button text={"See Projects"} />
              </div>
            </div>
          </div>

          {/* Floating Buttons at Bottom Right */}
          <div className="absolute -bottom-20 px-3 md:-bottom-4 md:-right-2 flex flex-col md:gap-y-1 w-full md:w-fit md:bg-white z-10 md:pl-10 md:pr-5 md:py-8 md:rounded-l-4xl">
            <img src={crescentShape} alt="cutout" className="hidden md:block absolute -top-18 -right-8 rotate-[42deg] w-24 h-30 " />
            <img src={crescentShape} alt="cutout" className="hidden md:block absolute -bottom-8 -left-14  rotate-[43deg] w-24 h-30 " />
            <Button text={"Schedule a Meeting"} className={"py-1 px-24"} />
            <Button text={"Schedule a Call"} className={"py-1 px-24 hidden md:block"} />
          </div>
        </div>
      </div>



      {/* 2nd Frame */}
      <div className="mt-[29px] md:mt-20 px-5">
        <h3 className="md:text-center font-medium text-[24px] md:text-[32px] leading-[43px] md:leading-[60px] tracking-[0%]">
          We have multidisciplinary teams to meet any{" "}
          <span className="bg-linear-to-t from-gradient-purple to-gradient-blue bg-clip-text text-transparent">
            challenge.
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 md:mx-20 rounded-[35px] shadow-md p-12.5">
          {challenge.map((item) => (
            <div key={item?.id} className="flex flex-col items-start gap-y-8.5">
              <img src={item?.image} alt={item?.title} className="size-12.5" />
              <h3 className="text-[28px] font-medium leading-[40px] text-start">
                {item?.title}
              </h3>
              <p className="text-base font-normal leading-[24px] text-start">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block md:my-20">
        <StackSelector />
      </div>


      <div className='relative px-5 md:px-20 w-full my-20 box-border overflow-hidden mt-20'>
        <div className="flex gap-2 md:gap-3 justify-center md:items-center pr-5  margin-auto">
          <img src={blueGradientVector} alt="vector" className="w-14 h-14 relative md:static -left-2 top-0 bottom-0" />
          <h2 className="text-[24px] md:text-3xl font-bold text-[#3D3D3D] mb-3 md:mb-6 text-center max-w-[700px]">
            Empowering Your Digital Vision: Our Comprehensive Tech Services.
          </h2>
        </div>
        <img src={blueGradientVector} alt="" className='hidden md:block absolute top-20 left-72' />
        <img src={yellowGreenVector} alt="" className='hidden md:block absolute bottom-20 right-80' />
        <div className="overflow-x-auto scrollbar-hide w-full box-border ">

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 m-1 place-items-center relative min-w-max  bw-fit md:min-w-full">
            {services.map((service) => (
              <InfoCard info={service} key={service.title} />
            ))}
          </div>
        </div>
      </div>

      {/* trusted by */}
      <TrustedBy />

      {/* <div className="mt-20">
        <ServicesSection />
      </div> */}

      <div className="w-full overflow-hidden mt-16 md:mt-20 px-5 md:px-10">
        {/* Other sections */}
        {/* <LatestInsights /> */}
        <div className="flex">
          <img src={yellowGreenVector} alt="vector" className="w-12 h-10" />
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Latest Insights
          </h2>
        </div>
        <div className="overflow-x-auto scrollbar-hide w-full box-border ">
          <div className={"flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16  m-1 place-items-center relative min-w-max w-fit md:min-w-full "}>
            {
              blogs.slice(0, 4).map((blog) => (
                <Blog key={blog.id} blog={blog} className={"w-[250px]! md:w-full!"} decorate={1} />
              ))
            }
          </div>
        </div>
        <FormYourCrew />
      </div>

      {/* <div>
        <StackSelector />
      </div> */}



      <ScheduleCallHome />
    </div>
  );
}