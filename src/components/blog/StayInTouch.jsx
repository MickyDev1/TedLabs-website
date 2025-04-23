import React from 'react'
import BannerContentWrapper from './BannerContentWrapper'
import { FaDiscord, FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const StayInTouch = () => {
    return (
        <BannerContentWrapper>
            <div className='flex flex-col justify-center items-center gap-4 px-3'>
                <h2 className='text-xl text-[#3D3D3D] font-medium'>Stay in Touch</h2>
                <div className='w-full flex gap-4 justify-between items-center '>
                    <FaWhatsapp className='cursor-pointer text-[#0A142F] w-8 h-8' />
                    <FaInstagram className='cursor-pointer text-[#0A142F] w-8 h-8' />
                    <FaTwitter className='cursor-pointer text-[#0A142F] w-8 h-8' />
                    <FaDiscord className='cursor-pointer text-[#0A142F] w-8 h-8' />
                    <FaFacebook className='cursor-pointer text-[#0A142F] w-8 h-8' />
                </div>
            </div>
        </BannerContentWrapper>
    )
}

export default StayInTouch