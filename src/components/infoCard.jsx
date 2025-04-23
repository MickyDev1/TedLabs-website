import React from 'react'

const InfoCard = ({ info }) => {
    return (
        <div className='w-[300px] md:w-[385px] h-[321px] shadow-md p-8 flex flex-col justify-between bg-white rounded-3xl gap-12'>
            <img src={info.icon} alt="" className='w-10 h-10' />
            <div className='flex flex-col flex-1 justify-between'>
                <h3 className='text-[#3D3D3D] text-[20px] md:text-[28px] leading-[40px] font-[500]'>{info.title}</h3>
                <p className='text-[#525252] text-[14px] md:text-[16px]'>{info.description}</p>
            </div>
        </div>
    )
}

export default InfoCard