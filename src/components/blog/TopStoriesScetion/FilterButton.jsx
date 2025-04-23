import React from 'react'

const FilterButton = ({category, isActive, setIsActive}) => {
    return (
        <div onClick={setIsActive} className={`border ${isActive ?" bg-primary" : "bg-transparent"} border-primary py-2 px-3 rounded-4xl md:w-[153px] md:h-[48px] box-border flex items-center justify-center cursor-pointer`}>
            <span className={`${isActive? 'text-white':'text-[#525252]'} text-[16px] font-medium leading-0 capitalize text-center`}>{category}</span>
        </div>
    )
}

export default FilterButton