import React from 'react'

const BannerContentWrapper = ({children, className}) => {
  return (
    <div className={`w-full h-fit p-5 md:p-8 bg-[#F7F7FD] rounded-2xl my-5 ${className}`}>
        {children}
    </div>
  )
}

export default BannerContentWrapper