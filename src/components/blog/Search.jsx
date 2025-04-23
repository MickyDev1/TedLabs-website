import React from 'react'
import BannerContentWrapper from './BannerContentWrapper'
import Header from '../miniComponent/Header'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
    return (
        <BannerContentWrapper>
            <div className='flex flex-col items-center gap-4'>
                <h2 className='text-xl text-[#3D3D3D] font-medium'>Search</h2>
                <div className='flex items-center gap-5 w-full bg-transparent border border-[#666666] rounded-4xl py-3 px-5'>
                    <FaSearch className='text-[#666666]'/>
                    <input type="search" placeholder='Search' spellCheck={false} className='text-[#666666] text-[16px] flex-1 bg-transparent border-none outline-0 focus:ring-0'  />
                </div>
            </div>
        </BannerContentWrapper>
    )
}

export default Search