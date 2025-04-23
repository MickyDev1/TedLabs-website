import React from 'react'

const BlogStoryFormat = ({story}) => {
    return (
        <div className='h-[130px] flex gap-5 rounded-2xl items-center'>
            <div className='w-[100px] h-[80px] md:w-[130px] md:h-[130px] rounded-2xl overflow-hidden'>
                <img src={story.img} alt="story img" className='w-full h-full object-cover md:object-fill' />
            </div>
            <div className='flex flex-col gap-2 md:gap-3 z-0'>
                <p className=' text-sm md:text-[16px] text-primary uppercase font-semibold tracking-[0.25em]'>{story.category}</p>
                <h2 className='text-xl md:text-2xl text-[#3D3D3D] font-medium'>{story.title}</h2>
            </div>
        </div>
    )
}

export default BlogStoryFormat