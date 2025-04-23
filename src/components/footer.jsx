import React from 'react'
import { FaArrowRight, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { logo2 } from "../assets";

const Footer = () => {
    return (
        <div className='px-5 md:px-20 pt-46'>
            <div className='flex w-full justify-between border-b border-gray-200 pb-10 flex-col lg:flex-row gap-5 md:gap-10'>
                <div className='flex-1 flex gap-3 justify-between w-full flex-wrap'>
                    <div className='flex-1 flex pt-10 '>
                        <div className='flex flex-col gap-2 min-w-[150px]'>
                            <p className='text-[#0A142F]'>Product</p>
                            <p className='text-[#6E6C83]'>Employee database</p>
                            <p className='text-[#6E6C83]'>Payroll</p>
                            <p className='text-[#6E6C83]'>Absences</p>
                            <p className='text-[#6E6C83]'>Time tracking</p>
                            <p className='text-[#6E6C83]'>Shift planner</p>
                            <p className='text-[#6E6C83]'>Recruiting</p>
                        </div>
                    </div>
                    <div className='flex-1 flex pt-10'>
                        <div className='flex flex-col gap-2 min-w-[150px]'>
                            <p className='text-[#0A142F]'>Information</p>
                            <p className='text-[#6E6C83]'>FAQ</p>
                            <p className='text-[#6E6C83]'>Payroll</p>
                            <p className='text-[#6E6C83]'>Support</p>
                        </div>
                    </div>
                    <div className='flex-1 flex pt-10'>
                        <div className='flex flex-col gap-2 min-w-[150px]'>
                            <p className='text-[#1a1a1a]'>Company</p>
                            <p className='text-[#6E6C83]'>About us</p>
                            <p className='text-[#6E6C83]'>Careers</p>
                            <p className='text-[#6E6C83]'>Contact us</p>
                            <p className='text-[#6E6C83]'>Lift Media</p>
                        </div>

                    </div>

                </div>
                <div className='w-full md:w-[400px] rounded-3xl bg-[#203C860D] flex flex-col gap-6 p-10'>
                    <p className='text-[#1a1a1a]'>Subscribe</p>
                    <div className='flex items-center rounded-4xl h-[50px] bg-white pl-5 border-2 border-gray-200'>
                        <input type="text" spellCheck={false} placeholder='Email address' className='flex-1 border-0 focus:ring-0 focus:outline-0' />
                        <button className=' rounded-full border-0 bg-linear-to-b from-[#3171DE] to-[#704AF2] h-[48px] w-[52px] flex items-center justify-center'><FaArrowRight className='text-white font-bold text-2xl cursor-pointer' /></button>
                    </div>
                    <p className='text-[#6E6C83] text-sm'>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                </div>
            </div>

            <div className='w-full flex flex-col-reverse gap-5 md:flex-row items-center justify-between py-5'>
                <div className='flex gap-5 w-full md:w-fit justify-between'>
                    <div>
                        <img src={logo2} alt="logo" className="w-[115px] h-[62px]" />
                    </div>
                    <div className='w-fit flex gap-4 items-center'>
                        <p className='text-[#0A142F]'>Terms</p>
                        <p className='text-[#0A142F]'>Privacy</p>
                        <p className='text-[#0A142F]'>Cookies</p>
                    </div>
                </div>
                <div className='md:w-fit w-full flex gap-4 md:items-center '>
                    <div className='p-2 border-2 border-gray-200 rounded-full'><FaLinkedinIn className='text-[#0A142F]' /></div>
                    <div className='p-2 border-2 border-gray-200 rounded-full'><FaFacebookF className='text-[#0A142F]' /></div>
                    <div className='p-2 border-2 border-gray-200 rounded-full'><FaTwitter className='text-[#0A142F]' /></div>
                </div>
            </div>

        </div>
    )
}

export default Footer