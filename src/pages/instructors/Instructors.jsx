import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleInstructor from './singleInstructor';

const Instructors = () => {
    const instructors = useLoaderData();

    console.log(instructors);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-10 lg:p-20'>
            {instructors.map((i) => (
                <SingleInstructor
                    key={i.id}
                    instructor={i}
                />
            ))}
        </div>
    );
};

export default Instructors;
