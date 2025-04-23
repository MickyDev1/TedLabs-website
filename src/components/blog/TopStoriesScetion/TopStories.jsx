import React, { useState } from 'react'
import BlogStoryFormat from './BlogStoryFormat'
import FilterButton from './FilterButton'
import BlogStorySkeleton from './BLogStorySkeleton'
import { story1, story2, story3, story4, story5, story6, story7, story8 } from '../../../assets/blog'

export const stories = [
    {
        id: 1,
        img: story1,
        category: "Tech",
        title: "Mobile App Development Trends to Watch in 2023"
    },
    {
        id: 2,
        img: story2,
        category: "Mobile",
        title: "Mobile App Development Trends to Watch in 2023"
    },
    {
        id: 3,
        img: story3,
        category: "Business",
        title: "Mobile App Development Trends to Watch in 2023"
    },
    {
        id: 4,
        img: story4,
        category: "Google",
        title: "Mobile App Development Trends to Watch in 2023"
    },
    {
        id: 5,
        img: story5,
        category: "Tech",
        title: "Mobile App Development Trends to Watch in 2023"
    },
    {
        id: 6,
        img: story6,
        category: "Finance",
        title: "Mobile App Development Trends to Watch in 2023"
    },
    {
        id: 7,
        img: story7,
        category: "Software",
        title: "Mobile App Development Trends to Watch in 2023"
    },
    {
        id: 8,
        img: story8,
        category: "Talent",
        title: "Mobile App Development Trends to Watch in 2023"
    },
]

export const filters = [
    {
        id: 1,
        category: "Talent",

    },
    {
        id: 2,
        category: "Tech",

    },
    {
        id: 3,
        category: "Blockchain",

    },
    {
        id: 4,
        category: "Software",

    },
]

const TopStories = () => {

    const [activeFilter, setActiveFilter] = useState("tech")
    const [isLoadingStories, setIsLoadingStories] = useState(false)



    const handleSetFilter = (filter) => {
        setIsLoadingStories(true)
        setTimeout(() => {
            setActiveFilter(filter)
            setIsLoadingStories(false)

        }, 800);

    }

    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <h2 className='text-[24px] md:text-[32px] text-[#3D3D3D]'>Top Stories</h2>
                <div className='flex gap-3 items-center w-full flex-wrap'>
                    {
                        filters.map((filter) => (
                            <FilterButton isActive={activeFilter.toLowerCase() === filter.category.toLowerCase()} setIsActive={() => handleSetFilter(filter.category)} category={filter.category} />
                        ))
                    }
                </div>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-3'>
                {!isLoadingStories ?
                    stories.map((story) => (
                        <BlogStoryFormat key={story.id} story={story} />
                    )) :
                    stories.map(() => (
                        <BlogStorySkeleton />
                    ))
                }

            </div>
        </div>
    )
}

export default TopStories