import React from 'react';

const singleInstructor = ({ instructor }) => {

    const { id, name, specialization, bio, email, phone, website, image, reviews, social_media } = instructor;

    return (
        <div className="card w-full bg-base-100 shadow-xl gap-10">
            <figure><img src={image} alt="instructor" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{specialization}</p>
                <div className="card-actions justify-end">
                    <button className="bg-[var(--main-color)] text-[var(--primary-bg)] font-bold py-2 px-3 rounded">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default singleInstructor;