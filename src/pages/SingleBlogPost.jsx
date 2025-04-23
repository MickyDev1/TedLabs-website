import React from 'react'
import { adImg, highlightBg, profilePic, singleBlogPostImg1, singleBlogPostImg2 } from '../assets/blog'
import { yellowGreenVector } from '../assets'
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import { topics } from '../components/blog/TrendingTopics'
import Search from '../components/blog/Search'
import Topic from '../components/blog/Topic'
import StayInTouch from '../components/blog/StayInTouch'
import BannerContentWrapper from '../components/blog/BannerContentWrapper'
import { blogs } from '../components/blog/BlogHighlights'
import Blog from '../components/blog/Blog'
import { filters } from '../components/blog/TopStoriesScetion/TopStories'
import Header from '../components/miniComponent/Header'

const SingleBlogPost = () => {
    return (
        <div className='w-full'>
            <div className=' w-full h-[450px] md:h-[600px] mb-20 bg-gray-300 rounded-b-3xl md:rounded-b-[60px] overflow-hidden relative flex items-end p-8 pb-10 md:p-16'>
                <img src={highlightBg} alt="" className='object-cover w-full h-full absolute inset-0' />
                <div className='flex flex-col gap-3 z-10'>
                    <div className='flex flex-col gap-3 pb-8 border-b border-white'>
                        <p className='text-[#EDE14F]'>TECH</p>
                        <h2 className='text-[32px] leading-[48px] text-white font-semibold'>The Power of UI/UX: Creating Engaging Digital Experiences</h2>
                    </div>
                    <div className='flex flex-col md:flex-row gap-3 justify-between md:items-center mt-3'>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full w-12 h-12 bg-gray-200 overflow-hidden'>
                                <img src={profilePic} alt="profile" className='w-full h-full object-cover' />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-3'>
                                    <img src={yellowGreenVector} alt="vector" className='w-[20px] h-[20px]' />
                                    <h2 className='text-[16px] text-white font-medium'>Luisa Mendes</h2>
                                </div>
                                <p className='text-[16px] text-white'>Feb 12, 2023 - 3 min read</p>
                            </div>
                        </div>
                        <div className='w-full md:w-fit flex gap-4 justify-start items-center '>
                            <FaWhatsapp className='text-white w-5 h-5' />
                            <FaInstagram className='text-white w-5 h-5' />
                            <FaTwitter className='text-white w-5 h-5' />
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex gap-20 px-5'>
                <div className='flex flex-col gap-16 flex-1'>
                    <p className='text-[20px] text-[#3D3D3D]'>In the rapidly evolving landscape of technology, user interface (UI) and user experience (UX) design have emerged as critical components in shaping the success of digital products and services. These two pillars play a pivotal role in determining how users interact with technology and the impressions they form.</p>

                    <div className='flex flex-col gap-8'>
                        <div className='h-[300px] md:h-[420px] w-full rounded-3xl overflow-hidden'>
                            <img src={singleBlogPostImg1} alt="blog img" className='w-full h-full object-cover ' />
                        </div>
                        <div className='flex flex-col gap-8'>
                            <h2 className='text-[32px] text-[#3D3D3D] font-semibold'>Understanding UI and UX</h2>

                            <p className='text-[20px] text-[#3D3D3D]'><strong>User Interface (UI)</strong> design focuses on the visual aspects of a digital product. It encompasses everything users see on their screens – from colors, typography, and icons to buttons, forms, and layout. UI designers strive to create visually appealing and intuitive interfaces that resonate with users and communicate a brand's identity.</p>
                            <p className='text-[20px] text-[#3D3D3D]'><strong>User Experience (UX)</strong> design, on the other hand, encompasses the entire journey users undertake while interacting with a digital product. It involves understanding user behaviors, needs, and motivations to craft seamless and satisfying experiences. UX designers work to simplify processes, minimize friction, and ensure users achieve their goals effortlessly.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-[32px] text-[#3D3D3D] font-semibold'>The Impact on Engagement</h2>

                        <p className='text-[20px] text-[#3D3D3D]'>The significance of UI/UX design lies in its impact on user engagement. In a world where attention spans are fleeting, an engaging and frictionless experience is paramount. A well-designed UI captures attention and guides users through a digital environment with ease. Intuitive navigation, clear calls to action, and cohesive design elements create a sense of familiarity and comfort, ultimately encouraging users to explore further.</p>
                        <p className='text-[20px] text-[#3D3D3D]'>UX, on the other hand, influences user satisfaction and loyalty. A positive UX ensures that users not only achieve their goals efficiently but also enjoy the journey. Smooth interactions, quick loading times, and personalized experiences leave users with a positive impression, increasing the likelihood of return visits and recommendations.</p>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div className='h-[300px] md:h-[420px] w-full rounded-3xl overflow-hidden'>
                            <img src={singleBlogPostImg2} alt="blog img" className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col gap-8'>
                            <h2 className='text-[32px] text-[#3D3D3D] font-semibold'>Understanding UI and UX</h2>

                            <p className='text-[20px] text-[#3D3D3D]'><strong>User Interface (UI)</strong> design focuses on the visual aspects of a digital product. It encompasses everything users see on their screens – from colors, typography, and icons to buttons, forms, and layout. UI designers strive to create visually appealing and intuitive interfaces that resonate with users and communicate a brand's identity.</p>
                            <p className='text-[20px] text-[#3D3D3D]'><strong>User Experience (UX)</strong> design, on the other hand, encompasses the entire journey users undertake while interacting with a digital product. It involves understanding user behaviors, needs, and motivations to craft seamless and satisfying experiences. UX designers work to simplify processes, minimize friction, and ensure users achieve their goals effortlessly.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 rounded-3xl border border-gray-300 p-5">
                        <div className='flex flex-col md:flex-row items-start gap-5'>
                            <div className=' rounded-full min-w-12 h-12 overflow-hidden'>
                                <img src={profilePic} alt="profile" className='w-full h-full object-cover' />
                            </div>
                            <div className='flex flex-col gap-8'>
                                {/* <div className='flex flex-col  gap-3'> */}
                                <div className="flex flex-col">
                                    <div className="flex gap-2">
                                        <img src={yellowGreenVector} alt="vector" className='w-[20px] h-[20px]' /><h2 className='text-[16px] text-[#1a1a1a] font-medium'>Luisa Mendes</h2>
                                    </div>
                                    <p className='text-[16px] text-[#3D3D3D]'>At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from.</p>
                                </div>
                                {/* </div> */}
                            </div>

                        </div>
                        <div className='w-full md:w-fit flex gap-4 justify-start items-center '>
                            <FaWhatsapp className='text-[#0A142F] w-5 h-5' />
                            <FaInstagram className='text-[#0A142F] w-5 h-5' />
                            <FaTwitter className='text-[#0A142F] w-5 h-5' />
                        </div>
                    </div>
                </div>

                <div className='w-[40%] hidden md:block'>
                    <div className='w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                        {
                            filters.map((filter) => (
                                <div onClick={() => {
                                    console.log("category");
                                }} className={`border bg-transparent border-[#525252] py-2 px-3 rounded-4xl w-[153px] h-[48px] box-border flex items-center justify-center cursor-pointer`}>
                                    <span className={`'text-[#525252]'} text-[16px] font-medium leading-0 capitalize text-center`}>{filter.category}</span>
                                </div>
                            ))
                        }
                    </div>
                    <Search />
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            topics.map((topic) => (
                                <Topic key={topic.id} topic={topic} />
                            ))
                        }
                    </div>

                    <StayInTouch />
                    <BannerContentWrapper className={"flex flex-col items-center"}>
                        {
                            blogs.map((blog) => (
                                <Blog key={blog.id} blog={blog} className={"w-full!"} decorate={1}  />
                            ))
                        }
                    </BannerContentWrapper>
                    <BannerContentWrapper className="flex flex-col justify-center gap-5">
                        <h2 className='text-[32px] text-[#3D3D3D] font-semibold text-center'>Ads</h2>
                        <img src={adImg} alt="" className='rounded-2xl' />
                    </BannerContentWrapper>
                </div>
            </div>
            <div className='mt-30' >
                <Header text={"Related "} />
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5" }>
                    {
                        blogs.slice(0,3).map((blog) => (
                            <Blog key={blog.id} blog={blog} className={"w-full!"} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default SingleBlogPost