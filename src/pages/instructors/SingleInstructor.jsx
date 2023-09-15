import React from 'react';

const singleInstructor = ({ instructor }) => {

    const { id, name, specialization, bio, email, phone, website, image, reviews, social_media } = instructor;
    console.log(social_media)
    return (
        <div className="card w-full bg-base-100 shadow-xl gap-10 h-full justify-between">
            <div>
                <figure><img className='p-5 md:h-96 lg:h-300' src={image} alt="instructor" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl border-t-2 pt-3 border-[var(--main-color)]">{name}</h2>
                <p className='font-bold mt-2'>Specialization: {specialization}</p>
                <p className='mt-3'>Bio: {bio}</p>
                <div className="card-actions justify-end pt-4 border-t-2 border-[var(--main-color)]">
                    <button className="custom-btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>View Details</button>
                </div>
            </div>
            {/* modal */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold mb-10 text-4xl text-center text-[var(--secondary-color)]">{name}</h3>
                    <p className="py-2">Bio: {bio}</p>
                    <p className="py-2">Email: {email}</p>
                    <p className="py-2">Phone: {phone}</p>
                    <p className="py-2">Website: {website}</p>

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