import React from 'react'
import { IoCallSharp } from "react-icons/io5"
import { AiOutlineMail } from "react-icons/ai"
import { FaLocationDot } from "react-icons/fa6";


const ContactInfo = () => {
    return (
        <section className='section-container bg-[var(--primary-bg)]'>
            <h3 className="section-title">Get in Touch</h3>
            <div>
                <div className='py-8 text-white flex justify-center items-center gap-4 flex-wrap bg-cover bg-center bg-[url("https://images.pexels.com/photos/3822189/pexels-photo-3822189.jpeg?auto=compress&cs=tinysrgb&w=1600")]'>
                    <div className='flex flex-col items-center gap-2 w-56 p-4 rounded-lg bg-[var(--secondary-color)]'>
                        <IoCallSharp size={40} />
                        <span className="text-[var(--main-color)] text-2xl px-4 py-2 rounded-xl font-bold">Call Us</span>
                        <span className='font-bold text-lg'>+91 0000000000</span>
                        <p className='text-gray-200 text-center'>We'll answer you as soon as we can.</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 w-56 p-4 rounded-lg bg-[var(--secondary-color)]'>
                        <AiOutlineMail size={40} />
                        <span className="text-[var(--main-color)] text-2xl px-4 py-2 rounded-xl font-bold">Mail Us</span>
                        <span className='font-bold text-lg'>user@example.com</span>
                        <p className='text-gray-200 text-center'>We'll mail your reply as soon as we can.</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 w-56 p-4 rounded-lg bg-[var(--secondary-color)]'>
                        <FaLocationDot size={40} />
                        <span className="text-[var(--main-color)] text-2xl px-4 py-2 rounded-xl font-bold">Adderess</span>
                        <span className='font-bold text-lg'>South-Ex, New Delhi</span>
                        <p className='text-gray-200 text-center'>We'll mail your reply as soon as we can.</p>
                    </div>
                </div>
                <div className='mt-8'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8988531242!2d77.04382888957063!3d28.527553994268924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1694258128140!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo;
