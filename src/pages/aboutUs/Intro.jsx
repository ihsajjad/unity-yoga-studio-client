import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <section className='section-container flex items-center justify-between gap-8 flex-col md:flex-row'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl font-bold'>Your Best Yoga Trainer</h1>
                <p className='mt-2 text-[var(--primary-text)]'>At Unity Yoga Studio, we believe in the transformative power of yoga to bring balance, harmony,
                    and unity to the body, mind, and soul. Our philosophy is rooted in the ancient wisdom of yoga,
                    which teaches that yoga is not just a physical practice but a path to holistic well-being.
                </p>
                <p className='mt-2 mb-4 text-[var(--primary-text)]'><i>"Discover Unity Yoga Studio: Where your journey to inner harmony begins, one mindful breath at a time."</i></p>
                <Link className='custom-btn-primary' to="/classes">Explore Our Classes</Link>
            </div>
            <div className='w-full md:w-1/2 rounded-md overflow-hidden'>
                <img className='w-full rounded-md transition-all duration-700 ease-linear hover:scale-125' src="https://cdn.pixabay.com/photo/2021/10/19/11/35/yoga-6723315_1280.jpg" alt="..." />
            </div>
        </section>
    )
}

export default Intro