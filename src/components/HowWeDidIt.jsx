import React from 'react'
import { flyingStar } from '../assets'

const howWeDidIt = [
    {
        year: "2021",
        text: "The vision to offer top-quality technical talent with time zone alignment, anywhere in the world was born.",
        coloVariation: "bluePurple"
    },
    {
        year: "2022",
        text: "Expanded to Brazil, Colombia, and Mexico and quickly became one of the fastest-growing companies in Latin America.",
        coloVariation: "yellowGreen"
    },
    {
        year: "2023",
        text: "Entered the US market, began operations in San Francisco.",
        coloVariation: "bluePurple"
    },
]

const HowWeDidIt = () => {
    return (
        <div className='flex w-full justify-center mt-10 relative pt-10 pb-40'>
            <div className='absolute pt-16 ml-6 z-10 -top-5 md:-top-14 -left-[28px] md:left-[1px]'>
                <div className='w-4 h-4 rounded-full bg-gradient-to-l from-[#3171DE] to-[#704AF2]'></div>
            </div>
            <div className='absolute left-0.5 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 ' />
            <div className='flex flex-col gap-5 m-auto'>
                <h2 className='text-[24px] font-semibold text-gray-800 '>How we did it...</h2>
                <img src={flyingStar} alt="star" className='w-10 h-10' />
                <div className="grid grid-cols-1 md:flex gap-8 justify-between w-full">
                    {
                        howWeDidIt.map((item, index) => (
                            <Card key={index} year={item.year} text={item.text} coloVariation={item.coloVariation} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const Card = ({ year, text, coloVariation }) => {
    return (
        <div className='flex flex-col rounded-2xl shadow-md w-[385px] gap-8 justify-between p-5 box-border'>
            <h2 className={`text-4xl font-extrabold bg-gradient-to-br ${coloVariation === 'yellowGreen' ? 'from-yellow-200 to-green-600' : 'from-10% from-blue-600 to-purple-600'}  bg-clip-text text-transparent`}>{year}</h2>
            <p>{text}</p>
        </div>
    )
}

export default HowWeDidIt;