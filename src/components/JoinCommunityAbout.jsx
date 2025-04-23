import React from 'react'
import { joinCommunityImg } from '../assets'

const JoinCommunityAbout = () => {
    return (
        <div className=' w-full'>
            <div className='flex flex-col gap-10 bg-gradient-to-b from-[#3171DE] to-[#704AF2] w-full md:w-auto rounded-3xl items-center p-10 md:py-16 md:px-20 relative'>
                <div className='absolute pt-16 ml-6 z-10 -top-5 md:top-3 -left-[28px] md:left-[1px]'>
                    <div className='w-4 h-4 rounded-full bg-white'></div>
                </div>
                <div className='absolute left-0.5 md:left-8 top-0 bottom-0 w-0.5 bg-white ' />
                <div className='flex flex-col gap-5'>
                    <h2 className='text-2xl md:text-[40px] text-white'>Now, we are committed to making a difference.</h2>
                    <p className='text-[16px] md:tex-[20px] text-white'>Now, more than ever, our commitment to making a difference is unwavering. As we continue to evolve and innovate in the ever-changing landscape of technology, our dedication to driving positive impact remains at the core of everything we do. With a track record of excellence and a team of passionate experts, we are poised to tackle new challenges and create transformative solutions. </p>
                </div>

                <img src={joinCommunityImg} alt="img" className='w-[820px]' />

                <div className='flex flex-col gap-5'>
                    <h2 className='text-[40px] md:text-[61.3px] text-center text-white font-bold'>Join us in this journey</h2>
                    <button className='mx-auto bg-gradient-to-b from-[#62AE6E] to-[#EDE14F] w-fit rounded-3xl px-10 py-2 text-white'>Schedule a Call</button>
                </div>

            </div>
        </div>
    )
}

export default JoinCommunityAbout