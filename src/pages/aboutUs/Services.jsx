import React from 'react'
import { GrYoga } from "react-icons/gr"
import { GiMeditation, GiTwirlyFlower, GiTeacher } from "react-icons/gi"
import { BsPersonWorkspace } from "react-icons/bs"


const Services = () => {
    return (
        <section className="section-container">
            <h2 className='section-title'>Our Services</h2>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                <div className="w-[22rem] h-36 bg-gray-300 py-2 px-4 border-t-[3px] border-red-400">
                    <h2 className='text-xl font-bold flex items-center gap-1'>Yoga Classes <GrYoga /></h2>
                    <p className='text-[var(--primary-text)]'>We offer a wide range of yoga classes, including Hatha, Vinyasa, Ashtanga, and Yin, suitable for all levels.</p>
                </div>
                <div className="w-[22rem] h-36 bg-gray-300 py-2 px-4 border-t-[3px] border-green-400">
                    <h2 className='text-xl font-bold flex items-center gap-1'>Meditation Sessions <GiMeditation /></h2>
                    <p className='text-[var(--primary-text)]'>Discover inner peace and mindfulness through guided meditation sessions</p>
                </div>
                <div className="w-[22rem] h-36 bg-gray-300 py-2 px-4 border-t-[3px] border-blue-400">
                    <h2 className='text-xl font-bold flex items-center gap-1'> Workshops and Retreats <BsPersonWorkspace /> </h2>
                    <p className='text-[var(--primary-text)]'>Deepen your practice through workshops, retreats, and special events</p>
                </div>
                <div className="w-[22rem] h-36 bg-gray-300 py-2 px-4 border-t-[3px] border-yellow-400">
                    <h2 className='text-xl font-bold flex items-center gap-1'>Private Sessions <GiTwirlyFlower /> </h2>
                    <p className='text-[var(--primary-text)]'>Personalized one-on-one sessions with experienced instructors for a tailored yoga experience</p>
                </div>
                <div className="w-[22rem] h-36 bg-gray-300 py-2 px-4 border-t-[3px] border-pink-400">
                    <h2 className='text-xl font-bold flex items-center gap-1'>Yoga Teacher Training<GiTeacher /></h2>
                    <p className='text-[var(--primary-text)]'>Embark on a transformative journey to become a certi ed yoga instructor with our teacher training program</p>
                </div>
            </div>
        </section>
    )
}

export default Services