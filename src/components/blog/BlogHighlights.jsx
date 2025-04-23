import React from 'react'
import { highlight01, highlightBg } from '../../assets/blog'
import Blog from './Blog'

export const blogs = [
    {
        id:1,
        img:highlight01,
        title:"Agile Development: The Key to Flexibility",
        summary:"Dive into the principles of agile development and how it enhances project management, collaboration.",
        author: "Alex Turner"

    },
    {
        id:2,
        img:highlight01,
        title:"Agile Development: The Key to Flexibility",
        summary:"Dive into the principles of agile development and how it enhances project management, collaboration.",
        author: "Alex Turner"

    },
    {
        id:3,
        img:highlight01,
        title:"Agile Development: The Key to Flexibility",
        summary:"Dive into the principles of agile development and how it enhances project management, collaboration.",
        author: "Alex Turner"

    },
    {
        id:4,
        img:highlight01,
        title:"Agile Development: The Key to Flexibility",
        summary:"Dive into the principles of agile development and how it enhances project management, collaboration.",
        author: "Alex Turner"

    },
]
const BlogHighlights = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-5 lg:gap-10'>
            <div className=' w-full  md:w-[50%] lg:w-[45%] h-[300px] md:h-[400px] lg:h-[600px]  relative p-5 lg:p-16  overflow-hidden rounded-4xl flex items-end'>
                <img src={highlightBg} alt="" className='absolute inset-0' />
                <div className='flex flex-col gap-3 z-0'>
                    <p className='text-[#EDE14F]'>TECH</p>
                    <h2 className='text-[32px] leading-[48px] text-white font-semibold'>The Power of UI/UX: Creating Engaging Digital Experiences</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 flex-1 md:gap-x-10 place-items-center'>
               {
                blogs.map((blog)=>(
                    <Blog key={blog.id} className={""} blog={blog}/>
                ))
               }

            </div>
        </div>
    )
}

export default BlogHighlights