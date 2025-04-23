import React from 'react'

const Topic = ({topic}) => {
    return (
        <div className='bg-gray-300 flex items-center md:items-end justify-center p-3 w-full h-[100px] lg:w-[180px] lg:h-[180px] rounded-2xl relative overflow-hidden'>
            <img src={topic.img} alt="topic img" className='absolute inset-0 w-full h-full object-cover lg:object-fill' />
            <p className='text-white font-semibold text-2xl z-10'>{topic.topic}</p>
        </div>
    )
}

export default Topic