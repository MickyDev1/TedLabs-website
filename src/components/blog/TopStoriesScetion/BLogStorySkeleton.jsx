import React from 'react';

const BlogStorySkeleton = () => {
    return (
        <div className='h-[130px] flex gap-5 rounded-2xl animate-pulse'>
            <div className='w-[130px] h-[130px] rounded-2xl bg-gray-300'></div>
            <div className='flex flex-col gap-3 w-full'>
                <div className='w-24 h-5 bg-gray-300 rounded-md'></div>
                <div className='w-3/4 h-8 bg-gray-300 rounded-md'></div>
            </div>
        </div>
    );
};

export default BlogStorySkeleton;