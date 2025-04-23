import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-[50px] w-full md:w-[565px]'>
        <form action="" className='w-full h-fit flex flex-col gap-5'>
            <div className="flex gap-3">
                <input type="text" className='bg-[#F9F9F9] rounded-md px-4 py-3 border-2 border-[#828282] text-[16px] text-[#011334] h-[50px] w-full focus:border-0 focus:outline-2 focus:outline-primary' required placeholder='First Name*' />
                <input type="text" className='bg-[#F9F9F9] rounded-md px-4 py-3 border-2 border-[#828282] text-[16px] text-[#011334] h-[50px] w-full focus:border-0 focus:outline-2 focus:outline-primary' required placeholder='Last Name*' />
            </div>
            <input type="text" className='bg-[#F9F9F9] rounded-md px-4 py-3 border-2 border-[#828282] text-[16px] text-[#011334] h-[50px] w-full focus:border-0 focus:outline-2 focus:outline-primary' required placeholder='Email*' />
            <input type="text" className='bg-[#F9F9F9] rounded-md px-4 py-3 border-2 border-[#828282] text-[16px] text-[#011334] h-[50px] w-full focus:border-0 focus:outline-2 focus:outline-primary' required placeholder='Phone Number*' />
            <textarea name="" id="" cols="30" rows="500" placeholder='Your message...' className='h-[140px] bg-[#F9F9F9] rounded-md px-4 py-3 border-2 border-[#828282] text-[16px] text-[#011334] w-full focus:border-0 focus:outline-2 focus:outline-primary'></textarea>
            <input type="submit" className='border-0 bg-primary rounded-3xl w-full h-[45px] mt-3 cursor-pointer text-white' value={"Send Message"} />
        </form>

    </div>
  )
}

export default ContactForm