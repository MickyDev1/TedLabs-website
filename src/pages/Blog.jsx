import React from 'react'
import BlogHighlights from '../components/blog/BlogHighlights'
import TrendingTopics from '../components/blog/TrendingTopics'
import TopStories from '../components/blog/TopStoriesScetion/TopStories'
import MoreBlogSection from '../components/blog/MoreBlogSection'

const Blog = () => {
  return (
    <div className='px-4 md:px-10 flex flex-col gap-4 md:pt-12'>
      <BlogHighlights/>
      <TrendingTopics/>
      <TopStories/>
      <MoreBlogSection/>
    
    </div>
  )
}

export default Blog