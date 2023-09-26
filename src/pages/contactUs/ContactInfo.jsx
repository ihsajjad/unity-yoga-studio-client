import React from 'react'
import { IoCallSharp } from "react-icons/io5"
import { AiOutlineMail } from "react-icons/ai"
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <section className='section-container flex items-center justify-between gap-12 flex-col md:flex-row bg-cover bg-center bg-[url("https://images.pexels.com/photos/6454065/pexels-photo-6454065.jpeg?auto=compress&cs=tinysrgb&w=1600")]'>
      <div className='w-full md:w-1/2 flex flex-col gap-4 backdrop-blur-md p-4 rounded-lg border-2 border-[var(--secondary-color)]'>
        <h2 className='md:text-3xl text-2xl text-[var(--secondary-color)] font-bold'>Our History</h2>
        <p>Unity Yoga Studio was founded in 2018 by Ms Arushi Talwar, a passionate yoga practitioner
          with a vision to create a haven for yoga enthusiasts. What began as a small studio has grown into
          a vibrant community dedicated to the practice of yoga and holistic well-being.</p>
        <Link to="/about" className='custom-btn-secondary self-center'>Read More About Us</Link>
      </div>
      <div className='flex items-center justify-center gap-4 flex-col w-full md:w-1/3 p-4 backdrop-blur-md  rounded-lg border-2 border-[var(--secondary-color)]'>
        <div className='flex flex-col items-center gap-2'>
          <span className='flex items-center gap-1 text-[var(--secondary-color)] text-2xl font-bold'> <FaLocationDot /> Adderess</span>
          <span>South-Ex, New Delhi</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <span className='flex items-center gap-1 text-[var(--secondary-color)] text-2xl font-bold'> <AiOutlineMail /> Mail Us</span>
          <span>user@example.com</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <span className='flex items-center gap-1 text-[var(--secondary-color)] text-2xl font-bold'> <IoCallSharp /> Call On</span>
          <span>+91 0000000000</span>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo