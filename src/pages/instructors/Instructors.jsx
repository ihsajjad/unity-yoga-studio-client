import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleInstructor from './SingleInstructor';
import HeroForInstructor from './HeroForInstructor';
import BasicYogaAsans from './BasicYogaAsans';

const Instructors = () => {
    const instructors = useLoaderData();

    // console.log(instructors);
    return (
        <div>
            <HeroForInstructor />
            <div className='section-container bg-[var(--primary-bg)]'>
                <h1 className='section-title mt-4'>Our Instructors</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                    {instructors.map((i) => (
                        <SingleInstructor
                            key={i.id}
                            instructor={i}
                        />
                    ))}
                </div>
            </div>
            <BasicYogaAsans />
        </div>
    );
};

export default Instructors;