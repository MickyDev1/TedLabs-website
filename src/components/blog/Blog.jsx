import React from 'react'
import { Link } from 'react-router-dom'
import { blueGradientVector, yellowGreenVector } from '../../assets'

const Blog = ({ blog, className, decorate }) => {
    return (
        <Link to={"/blog/27j3h45k23j4528412k"}>
            <div className={`flex flex-col w-full lg:w-[350px]  h-fit rounded-2xl pb-5  md:gap-3 ${className}`}>
                <div className='rounded-2xl overflow-hidden w-full h-[200px]'>
                    <img src={blog.img} alt="blog img" className='object-cover rounded-b-2xl' />
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-[#212121] font-medium'>{blog.title}</h3>
                    <p className='text-[#666666] text-sm'>{blog.summary}</p>
                </div>
                <div className="flex items-center gap-2">
                    {decorate && decorate === 1 &&  <img src={blueGradientVector} alt="vector" className='w-5 h-5 md:w-10 md:h-10'/>   }
                    {decorate && decorate === 2 &&  <img src={yellowGreenVector} alt="vector" className='w-5 h-5 md:w-10 md:h-10'/>   }
                    <p className='text-[#212121] font-medium'>Author: {blog.author}</p>
                </div>

            </div></Link>
    )
}

export default Blog