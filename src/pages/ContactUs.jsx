import React from 'react'
import { contactImg, contactImg1 } from '../assets/contactUs'
import { IoLocationOutline } from 'react-icons/io5'
import { FaRegEnvelope } from 'react-icons/fa6'
import { TbPhoneCall } from 'react-icons/tb'
import ContactForm from '../components/ContactForm.'

const MapEmbed = () => {
  return (
    <div className="w-full h-[150px] mt-10 lg:mt-0 md:h-[417px] rounded-sm md:rounded-3xl overflow-hidden">
      <iframe className='rounded-4xl '
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094335!2d144.96305791531642!3d-37.81627977975147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778f3a12eaa46b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1634303224810!5m2!1sen!2sus"
      ></iframe>
    </div>
  );
};


const ContactUs = () => {
  return (
    <div className='flex flex-col gap-5 w-full box-border'>
      <div className=" w-full h-[186px] md:h-[500px] relative flex  items-center pl-5 md:pl-50 box-border overflow-hidden">
        <div className='w-full h-full flex absolute inset-0 object-fill -z-10'>
          <img src={contactImg1} alt="" className='flex-1 ' />
          <img src={contactImg} alt="" className='flex-1' />
        </div>
        <h2 className='text-[25px] md:text-[50px] font-extrabold text-white '>Contact Us</h2>
      </div>

      <div className="w-full flex flex-col-reverse justify-center items-center md:items-start lg:flex-row px-3 md:px-20 lg:px-50 pt-32 gap-10 md:gap-0  lg:gap-30">
        <div className='flex-1 flex flex-col gap-10 w-full md:-mt-40 lg:mt-0 lg:w-[565px] px-3'>
          <h2 className='text-[#011334] text-[36px]'>Let's talk with us</h2>
          <p className='text-[#011334] font-normal'>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
          <div className='flex flex-col gap-5 md:w-[565px]'>
            <div className='flex items-start gap-3'>
              <IoLocationOutline className='text-[#7434F4] text-4xl' />
              <p className='text-[#011334] font-bold text-[16px]'>1055 Arthur ave Elk Groot, 67.
                New Palmas South Carolina</p>
            </div>
            <div className='flex items-start gap-3'>
              <TbPhoneCall className='text-[#7434F4] text-2xl' />
              <p className='text-[#011334] font-bold text-[16px]'>+1 234 678 9108 99</p>
            </div>
            <div className='flex items-start gap-3'>
              <FaRegEnvelope className='text-[#7434F4] text-xl' />
              <p className='text-[#011334] font-bold text-[16px]'>Contact@moralizer.com</p>
            </div>
          </div>
        </div>
        <div className='w-full flex md:justify-center flex-1 relative bottom-36 md:bottom-60 lg:bottom-60'>
          <ContactForm />
        </div>
      </div>

      <div className="w-full px-3 md:px-10 ">
        <MapEmbed />
      </div>
    </div>
  )
}

export default ContactUs