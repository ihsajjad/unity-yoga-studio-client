import React from 'react'
import Lottie from "lottie-react";
import developerAnimation from "../../assets/developer-animation.json";
import { AiOutlineUser } from 'react-icons/ai';
import { MdEmail } from "react-icons/md"
import { BiSolidMessageDetail } from "react-icons/bi"
const ContactForm = () => {

  const handleSubmit = async () => {

  }

  return (
    <section className='section-container flex flex-col items-center gap-6'>
      <h2 className="section-title">Get In Touch</h2>
      <div className='flex items-center justify-between flex-col md:flex-row bg-gradient-to-t md:bg-gradient-to-l	from-[var(--main-color)] py-4'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-start min-w-[20rem] w-1/2 '>
          <div className='flex flex-col w-full'>
            <span className='text-[var(--secondary-color)] font-bold flex items-center gap-1'><AiOutlineUser/> Name</span>
            <input className='border-b-2 border-[#b5b5b5] focus:border-[var(--secondary-color)] outline-none w-full py-1 bg-transparent' placeholder='Enter Your Name' type="text" />
          </div>
          <div className='flex flex-col w-full'> 
            <span className='text-[var(--secondary-color)] font-bold flex items-center gap-1'><MdEmail/>E-mail</span>
            <input className='border-b-2 border-[#b5b5b5] transition-all focus:border-[var(--secondary-color)] outline-none w-full py-1 bg-transparent' placeholder='Enter Your Email' type="text" />
          </div>
          <div className='flex flex-col w-full'>
            <span className='text-[var(--secondary-color)] font-bold flex items-center gap-1'> <BiSolidMessageDetail/> Message</span>
            <textarea className='border-[#b5b5b5] focus:border-[var(--secondary-color)] border-2 w-full outline-none p-2 rounded-lg bg-transparent' name="message" cols="30" rows="10" placeholder='Type Here...'></textarea>
          </div>
          <button className='custom-btn-secondary self-center'>Submit</button>
        </form>
        <Lottie className=' scale-90' animationData={developerAnimation} />
      </div>
    </section>
  )
}

export default ContactForm