import React from 'react'
import { bankingAppProject, bankingAppProject2, dashboardUiKitProject, laptopImg, phonesImg, purpleMobileIcon, ubaProject, whiteMobileIcon } from '../assets'

const ProjectList = () => {


    return (
        <div className='flex flex-col gap-10'>
            <div className='w-full h-fit px-2 md:px-5'>
                <div className={`w-full h-fit rounded-4xl flex flex-col gap-10 relative bg-[#053063] mx-auto justify-between px-4 md:p-8 overflow-hidden`}>
                    <div className='flex relative'>
                        <div className='flex flex-col gap-4 max-w-[600px] z-10'>
                            <h2 className='text-white'>First Bank of NIgeria Ltd.</h2>
                            <h2 className='text-white font-bold text-[28px] md:text-[128px] leading-[32px] md:leading-[121px]'>Mobile & Web <span className='text-[#F3BC4C]'>Banking</span></h2>
                        </div>
                        <div className='flex flex-col items-end md:flex-row md:items-center absolute inset-0 '>
                            <img src={phonesImg} alt="" className='md:w-[700px] md:h-[400px] relative md:left-[300px]' />
                            <img src={laptopImg} alt="" className='md:w-[800px] md:h-[400px]' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 md:flex-row justify-between items-center h-fit md:pr-5 z-10'>
                        <div className={`flex flex-col md:flex-row gap-4 rounded-4xl items-center bg-white w-full md:w-[750px] px-5 py-3`}>
                            <div className={`flex gap-4 items-center flex-1 py-3`}>
                                <img src={purpleMobileIcon} alt="" />
                                <h2 className='font-medium my-5 text-[18px] md:text-[28px] '>Access Bank Mobile App Development</h2>
                            </div>

                            <p className='flex-1'>Build performant, scalable, and secure mobile applications for iOS and Android devices.</p>
                        </div>
                        <button
                            className={`px-6 py-4.5 text-primary cursor-pointer rounded-[50px] bg-white font-medium text-base leading-[100%]`}
                        >
                            Read More
                        </button>
                    </div>

                </div>
            </div>
            {/* UBA */}
            <div className={`w-full h-[600px] rounded-4xl flex flex-col gap-10 relative overflow-hidden justify-end px-2 md:px-4 pb-3`}>
                <img src={ubaProject} alt="bg" className='w-full h-full absolute bottom-0 right-0 left-0' />
                <div className='flex flex-row gap-4 justify-between items-center h-fit z-10 md:pr-5'>
                    <div className={`flex flex-row gap-4 rounded-4xl items-center bg-[#F70400] w-full md:w-[750px] px-2 md:px-5 py-2 md:py-3`}>
                        <div className={`flex gap-4 items-center  py-3`}>
                            <img src={whiteMobileIcon} alt="" />
                            <h2 className='font-medium my-5 text-[14px] md:text-[28px] text-white'>Access Bank Mobile App Development</h2>
                        </div>
                        <p className='text-white text-[12px] md:text-[18px]'>Build performant, scalable, and secure mobile applications for iOS and Android devices.</p>
                    </div>
                    <button
                        className={`px-6 py-4.5  bg-[#F70400] cursor-pointer rounded-[50px] text-white font-medium text-base leading-[100%]`}
                    >
                        Read More
                    </button>
                </div>

            </div>

            <div className={`w-full h-[600px] rounded-4xl flex flex-col gap-10 relative  overflow-hidden justify-end px-4 pb-3`}>
                <img src={bankingAppProject} alt="bg" className='w-full h-full absolute bottom-0 right-0 left-0' />
                <div className='flex flex-col md:flex-row gap-4 justify-between items-center h-fit z-10 md:pr-5'>
                    <div className={`flex flex-col md:flex-row gap-4 rounded-4xl items-center bg-primary w-full md:w-[750px] px-5 py-3`}>
                        <div className={`flex gap-4 items-center py-3`}>
                            <img src={whiteMobileIcon} alt="" />
                            <h2 className='font-medium my-5 text-[18px] md:text-[28px] text-white'>Access Bank Mobile App Development</h2>
                        </div>
                        <p className='text-white'>Build performant, scalable, and secure mobile applications for iOS and Android devices.</p>
                    </div>
                    <button
                        className={`px-6 py-4.5  bg-primary cursor-pointer rounded-[50px] text-white font-medium text-base leading-[100%]`}
                    >
                        Read More
                    </button>
                </div>

            </div>
            <div className={`w-full h-[600px] rounded-4xl flex flex-col gap-10 relative  overflow-hidden justify-end px-4 pb-3`}>
                <img src={bankingAppProject2} alt="bg" className='w-full h-full absolute bottom-0 right-0 left-0' />
                <div className='flex flex-col md:flex-row gap-4 justify-between items-center h-fit z-10 md:pr-5'>
                    <div className={`flex flex-col md:flex-row gap-4 rounded-4xl items-center bg-primary w-full md:w-[750px] px-5 py-3`}>
                        <div className={`flex gap-4 items-center py-3`}>
                            <img src={whiteMobileIcon} alt="" />
                            <h2 className='font-medium my-5 text-[18px] md:text-[28px] text-white'>Access Bank Mobile App Development</h2>
                        </div>
                        <p className='text-white'>Build performant, scalable, and secure mobile applications for iOS and Android devices.</p>
                    </div>
                    <button
                        className={`px-6 py-4.5  bg-primary cursor-pointer rounded-[50px] text-white font-medium text-base leading-[100%]`}
                    >
                        Read More
                    </button>
                </div>

            </div>
            <div className={`w-full h-[600px] rounded-4xl flex flex-col gap-10 relative  overflow-hidden justify-end px-4 pb-3`}>
                <img src={dashboardUiKitProject} alt="bg" className='w-full h-full absolute bottom-0 right-0 left-0' />
                <div className='flex flex-col md:flex-row gap-4 justify-between items-center h-fit z-10 md:pr-5'>
                    <div className={`flex flex-col md:flex-row gap-4 rounded-4xl items-center bg-[#354DF0] w-full md:w-[750px] px-5 py-3`}>
                        <div className={`flex gap-4 items-center py-3`}>
                            <img src={whiteMobileIcon} alt="" />
                            <h2 className='font-medium my-5 text-[18px] md:text-[28px] text-white'>Access Bank Mobile App Development</h2>
                        </div>
                        <p className='text-white'>Build performant, scalable, and secure mobile applications for iOS and Android devices.</p>
                    </div>
                    <button
                        className={`px-6 py-4.5  bg-[#354DF0] cursor-pointer rounded-[50px] text-white font-medium text-base leading-[100%]`}
                    >
                        Read More
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ProjectList