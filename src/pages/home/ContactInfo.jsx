import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"
import { FaFacebookSquare } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"
import { IoIosCall, IoIosMail } from "react-icons/io"

const ContactInfo = () => {
    return (
        <section>
            <h3 className="text-3xl text-center text-[var(--main-color)] font-bold my-5">
                Contact Information
            </h3>
            <div className='flex justify-between flex-col md:flex-row gap-8 px-2 md:px-0'>
                <div className='flex flex-col items-center gap-8 md:ml-4'>
                    <div className='border-[var(--main-color)] border-2 rounded-t-xl overflow-hidden min-w-[22rem]'>
                        <span className='px-4 py-2 text-center bg-[var(--main-color)] text-[var(--primary-text)] font-bold text-xl flex items-center gap-1 justify-center'>
                            <IoIosCall /> Contact On:
                        </span>
                        <span className='block mx-4 my-2 text-center'>+91 7878787878</span>
                    </div>
                    <div className='border-[var(--main-color)] border-2 rounded-t-xl overflow-hidden min-w-[22rem]'>
                        <span className='px-4 text-center py-2 bg-[var(--main-color)] text-[var(--primary-text)] font-bold text-xl flex items-center gap-1 justify-center'>
                            <IoIosMail /> Mail On:
                        </span>
                        <span className='block mx-4 my-2 text-center'>user@example.com</span>
                    </div>
                    <div className='border-[var(--main-color)] border-2 rounded-t-xl overflow-hidden min-w-[22rem]'>
                        <span className='px-4 text-center py-2 bg-[var(--main-color)] text-[var(--primary-text)] font-bold text-xl flex items-center gap-1 justify-center'>
                            <MdLocationPin /> Adderess:
                        </span>
                        <span className='block mx-4 my-2 text-center'>South-Ex, New Delhi</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <a className='transition-transform hover:scale-125' href="#"><FaFacebookSquare size={38} color='var(--main-color)' /></a>
                        <a className='transition-transform hover:scale-125' href="#"><AiFillInstagram size={38} color='var(--main-color)' /></a>
                        <a className='transition-transform hover:scale-125' href="#"><AiOutlineTwitter size={38} color='var(--main-color)' /></a>
                        <a className='transition-transform hover:scale-125' href="#"><AiFillYoutube size={38} color='var(--main-color)' /></a>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F"
                    className=' h-96 w-full max-w-3xl'
                ></iframe>
            </div>
        </section>
    )
}

export default ContactInfo;