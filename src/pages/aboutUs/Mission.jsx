import React from 'react'

const Mission = () => {
    return (
        <section className='section-container flex flex-col md:flex-row items-center gap-8'>
            <div className="w-full md:w-1/2 overflow-hidden rounded-md">
                <img className='rounded-md w-full transition-all duration-700 ease-linear hover:scale-125' src="https://cdn.pixabay.com/photo/2022/04/18/13/27/yoga-7140566_640.jpg" alt="..." />
            </div>
            <div className="w-full md:w-1/2">
                <h2 className='text-3xl font-bold'>Our Mission</h2>
                <p className='text-[var(--primary-text)] mt-2'>Our mission is to create a welcoming and inclusive space where individuals of all backgrounds
                    and abilities can explore and deepen their yoga practice. We aim to inspire and empower our
                    community to lead healthier, more balanced lives through the practice of yoga.</p>
                <p className='mt-2'>
                    <i>"Yoga is the path that unites us all, transcending backgrounds and abilities, inviting everyone to find their inner balance and harmony. Together, we create a space where diversity thrives, and through the practice of yoga, we empower one another to lead healthier, more fulfilling lives."</i>
                </p>
            </div>
        </section>
    )
}

export default Mission