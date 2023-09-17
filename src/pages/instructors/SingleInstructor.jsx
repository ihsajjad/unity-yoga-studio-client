import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiFillTwitterCircle } from 'react-icons/ai';
import { RiFacebookCircleFill, RiInstagramFill } from 'react-icons/ri';

const singleInstructor = ({ instructor }) => {

    const { id, name, specialization, bio, email, phone, website, image, reviews, social_media, teaching_philosophy } = instructor;
    // console.log(social_media.facebook)
    return (
        <div className="card w-full bg-base-100 shadow-xl gap-10 h-full justify-between ">
            <div>
                <figure><img className='p-5 md:h-96 h-[50vh]' src={image} alt="instructor" /></figure>
                <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-4'>
                    <a href={social_media.facebook}><RiFacebookCircleFill size={35} className="text-[#1877f2]" /></a>
                    <a href={social_media.instagram}><RiInstagramFill size={35} className="text-[#e1306c]" /></a>
                    <a href={social_media.twitter}><AiFillTwitterCircle size={35} className="text-[#1da1f2]" /></a>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl border-t-2 pt-3 text-[var(--secondary-color)] border-[var(--main-color)]">{name}</h2>
                <p className='font-bold mt-2'>Specialization: {specialization}</p>
                <p className='mt-3 text-justify'>Bio: {bio}</p>
                <div className="card-actions justify-end pt-4 border-t-2 border-[var(--main-color)]">
                    <button className="custom-btn-primary" onClick={() => document.getElementById(id).showModal()}>View Details</button>
                </div>
            </div>
            {/* modal */}

            <dialog id={id} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold mb-2 text-4xl text-center text-[var(--secondary-color)]">{name}</h3>
                    <p className="py-2  text-justify"><span className='font-semibold text-justify'>Teaching Philosofy:</span> {teaching_philosophy}</p>
                    <div className='flex lg:flex-row flex-col justify-between'>
                        <p className="py-2  flex items-center gap-2"><AiOutlineMail /> {email}</p>
                        <p className="py-2  flex items-center gap-2"><AiOutlinePhone /> {phone}</p>
                    </div>
                    {/* <p className="py-2">Website: {website}</p> */}

                    <div className="modal-action pt-4 border-t-2 border-[var(--main-color)]">
                        <form method="dialog">
                            <button className="custom-btn-primary">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default singleInstructor;