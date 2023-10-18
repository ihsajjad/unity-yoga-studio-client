import React, { useEffect, useState } from 'react';
import SingleInstructor from './SingleInstructor';
import HeroForInstructor from './HeroForInstructor';
import BasicYogaAsans from './BasicYogaAsans';
import { useLoaderData } from 'react-router-dom';

const Instructors = () => {
    const [instructors, setInstuctors] = useState([]);

    console.log("Starting of useEfect");
    useEffect(() => {
        console.log("Start fetching function")
        const fetchInstructor = async () => {
            try {
                const res = await fetch("https://yoga.asdfrajkumar112.repl.co/instructor/show-instructors");
                const data = await res.json();
                console.log(data ? data : "No response");
                setInstuctors(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchInstructor();
    }, [])

    // console.log(instructors);
    return (
        <div>
            <HeroForInstructor />
            <div className='section-container bg-[var(--primary-bg)]'>
                <h1 className='section-title mt-4'>Our Instructors</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                    {instructors.map((instructor) => (
                        <SingleInstructor
                            key={instructor.id}
                            instructor={instructor}
                        />
                    ))}
                </div>
            </div>
            <BasicYogaAsans />
        </div>
    );
};

export default Instructors;