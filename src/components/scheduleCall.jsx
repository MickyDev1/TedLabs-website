import React from 'react'
import Img from '../assets/callIntersect.png'

function ScheduleCallHome() {
  return (
    <div className='flex flex-col items-center px-10 gap-10 md:gap-0 md:-mb-46'>
      <div className='box-border rounded-3xl w-full h-fit md:h-[550px] bg-linear-to-b py-12 px-10 from-[#4AC0F2] to-[#3171DE] flex flex-col gap-8 justify-center md:justify-start items-center'>
        <h2 className='text-white text-4xl font-bold md:w-[700px] text-center leading-[48px] md:leading-[68px]'>Ready to Transform Your Vision into Reality? Let's Get Started!</h2>
        <button className='border-0 bg-white rounded-3xl text-[#5E5DEF] cursor-pointer hover:-translate-y-1 duration-300 flex items-center justify-center px-5 py-4 leading-none w-fit'>Schedule a Call</button>
      </div>
      <img className='relative md:bottom-60' src={Img} alt="" />

    </div>
  )
}

export default ScheduleCallHome