import React from 'react'
import { yellowGreenVector } from '../../assets'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import BannerContentWrapper from './BannerContentWrapper'
import Topic from './Topic'
import { finances, fitness, food, lifestyle, space, travel } from '../../assets/blog'


export const topics = [
    {
        id:1,
        img:travel,
        topic:"Travel"
    },
    {
        id:2,
        img:food,
        topic:"Food"
    },
    {
        id:3,
        img:space,
        topic:"Space"
    },
    {
        id:4,
        img:lifestyle,
        topic:"Lifestyle"
    },
    {
        id:5,
        img:finances,
        topic:"Finances"
    },
    {
        id:6,
        img:fitness,
        topic:"Fitness"
    },
]

const TrendingTopics = () => {

   

    return (
        <BannerContentWrapper>
        <div className='w-full flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src={yellowGreenVector} alt="vector" className='w-[64px] h-[57px]'/>
                        <h2 className='text-[24px] md:text-[32px] text-[#3D3D3D]'>Trending Topics</h2>
                    </div>
                    <div className='md:flex items-center gap-3 hidden '>
                        <FaChevronLeft className='text[#292D32] w-7 h-7'/>
                        <FaChevronRight  className='text[#292D32] w-7 h-7'/>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6'>
                    {
                        topics.map((topic)=>(
                           <Topic key={topic.id} topic={topic}/>
                        ))
                    }

                </div>
            </div>
        </BannerContentWrapper>
    )
}

export default TrendingTopics