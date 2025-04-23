import React from 'react'
import { filters, stories } from './TopStoriesScetion/TopStories'
import BlogInfoCard from './BlogInfoCard'
import Search from './Search'
import { topics } from './TrendingTopics'
import Topic from './Topic'
import StayInTouch from './StayInTouch'

const MoreBlogSection = () => {

    return (
        <div className='w-full flex md:gap-8 mt-10'>
            <div className='flex-1 flex flex-col gap-5'>
                {
                    stories.slice(0, 4).map((story) => (
                        <BlogInfoCard blog={story} />
                    ))
                }
            </div>
            <div className='w-[40%] hidden md:block'>
                <div className='w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                    {
                        filters.map((filter) => (
                            <div onClick={()=>{console.log("category");
                            }} className={`border bg-transparent border-[#525252] py-2 px-3 rounded-4xl w-[153px] h-[48px] box-border flex items-center justify-center cursor-pointer`}>
                                <span className={`'text-[#525252]'} text-[16px] font-medium leading-0 capitalize text-center`}>{filter.category}</span>
                            </div>
                        ))
                    }
                </div>
                <Search/>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            topics.map((topic)=>(
                                <Topic key={topic.id} topic={topic}/>
                            ))
                        }
                    </div>

                <StayInTouch/>
            </div>
        </div>
    )
}

export default MoreBlogSection