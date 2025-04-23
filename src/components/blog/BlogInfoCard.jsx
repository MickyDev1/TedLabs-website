import React from 'react'
import { yellowGreenVector } from '../../assets'
import {FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const BlogInfoCard = ({ blog }) => {
    return (
        <div className='flex flex-col md:flex-row items-center w-full gap-5'>
            {blog.img && <div className='w-full md:w-[257px] h-[230px] rounded-2xl overflow-hidden'><img src={blog.img} alt="blog img" className='object-fill w-full h-full' /></div>}
            <div className='flex flex-col flex-1 border border-[#CDCDCD] rounded-2xl p-5 gap-5'>
                <div className='flex flex-col gap-3 z-0'>
                    <p className='text-primary uppercase font-semibold tracking-[0.25em]'>{blog.category}</p>
                    <h2 className='text-2xl text-[#3D3D3D] font-medium'>{blog.title}</h2>
                </div>
                <div className='flex flex-col md:flex-row gap-3 justify-between md:items-center'>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-3'>
                            <img src={yellowGreenVector} alt="vector" className='w-[24px] h-[24px]' />
                            <h2 className='text-[16px] text-[#3D3D3D] font-medium'>Luthor King</h2>
                        </div>
                        <p className='text-[16px] text-[#525252]'>Feb 12, 2023 - 3 min read</p>
                    </div>
                    <div className='w-full md:w-fit flex gap-4 justify-start items-center '>
                        <FaWhatsapp className='text-[#0A142F] w-5 h-5' />
                        <FaInstagram className='text-[#0A142F] w-5 h-5' />
                        <FaTwitter className='text-[#0A142F] w-5 h-5' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogInfoCard