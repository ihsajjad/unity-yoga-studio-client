import React from 'react';

const Settings = () => {
    return (
        <div>
            <h1 className="font-bold text-[var(--secondary-color)] text-center text-4xl">Settings</h1>
            {/* settings form */}
            <form className="card-body">
                {/* email field */}
                <div className='flex justify-between gap-20'>
                    <div className="form-control w-4/5">
                        <label className="label">
                            <span className="text-xl font-bold">Email</span>
                        </label>
                        <input type="email" placeholder="enter your email here" className="border-b-2 border-[var(--secondary-color)]" />
                    </div>
                    <div className="form-control mt-6 w-1/5">
                        <button className="border-2 border-[var(--secondary-color)] md:py-2 py-1 md:px-3 px-2 rounded-full bg-[var(--secondary-color)] text-white hover:bg-transparent hover:text-[var(--secondary-color)] font-semibold duration-300 w-full self-center" type="submit">Confirm Email</button>
                    </div>
                </div>
                {/* address field */}
                <div className='flex justify-between gap-20'>
                    <div className="form-control w-4/5">
                        <label className="label">
                            <span className="text-xl font-bold">Address</span>
                        </label>
                        <input type="text" placeholder="enter your address here" className=" border-b-2 border-[var(--secondary-color)]" />
                    </div>
                    <div className="form-control mt-6 w-1/5">
                        <button className="border-2 border-[var(--secondary-color)] md:py-2 py-1 md:px-3 px-2 rounded-full bg-[var(--secondary-color)] text-white hover:bg-transparent hover:text-[var(--secondary-color)] font-semibold duration-300 w-full self-center" type="submit">Confirm Address</button>
                    </div>
                </div>
                {/* contact number field */}
                <div className='flex justify-between gap-20'>
                    <div className="form-control w-4/5">
                        <label className="label">
                            <span className="text-xl font-bold">Contact Number</span>
                        </label>
                        <input type="number" placeholder="enter your contact number" className=" border-b-2 border-[var(--secondary-color)]" />
                    </div>
                    <div className="form-control mt-6 w-1/5">
                        <button className="border-2 border-[var(--secondary-color)] md:py-2 py-1 md:px-3 px-2 rounded-full bg-[var(--secondary-color)] text-white hover:bg-transparent hover:text-[var(--secondary-color)] font-semibold duration-300 w-full self-center" type="submit">Confirm Number</button>
                    </div>
                </div>
                {/* galary section */}
                <div className='flex justify-between gap-20'>
                    <div className="form-control w-4/5">
                        <label className="label">
                            <span className="text-xl font-bold">Add Image for Gallary</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-sm w-full" />
                    </div>
                    <div className="form-control mt-6 w-1/5">
                        <button className="items-center border-2 border-[var(--secondary-color)] md:py-2 py-1 md:px-3 px-2 rounded-full bg-[var(--secondary-color)] text-white hover:bg-transparent hover:text-[var(--secondary-color)] font-semibold duration-300 w-full self-center" type="submit">Add Image</button>
                    </div>
                </div>
                {/* hero section banner heading */}
                <div className='flex justify-between gap-20'>
                    <div className="form-control w-4/5">
                        <label className="label">
                            <span className="text-xl font-bold">Add Hero Section Heading</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="enter hero sections heading"></textarea>
                    </div>
                    <div className="form-control  mt-6 w-1/5">
                        <button className="items-center border-2 border-[var(--secondary-color)] md:py-2 py-1 md:px-3 px-2 rounded-full bg-[var(--secondary-color)] text-white hover:bg-transparent hover:text-[var(--secondary-color)] font-semibold duration-300 w-full self-center" type="submit">Add Heading</button>
                    </div>
                </div>
                {/* add hero sections banner paragraph */}
                <div className='flex justify-between gap-20'>
                    <div className="form-control w-4/5">
                        <label className="label">
                            <span className="text-xl font-bold">Add Hero Section Sub-heading</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="enter hero sections subheading"></textarea>
                    </div>
                    <div className="form-control  mt-6 w-1/5">
                        <button className="items-center border-2 border-[var(--secondary-color)] md:py-2 py-1 md:px-3 px-2 rounded-full bg-[var(--secondary-color)] text-white hover:bg-transparent hover:text-[var(--secondary-color)] font-semibold duration-300 w-full self-center" type="submit">Add Sub-heading</button>
                    </div>
                </div>
                {/* add instructor sections heading */}
                <div className='flex justify-between gap-20'>
                    <div className="form-control w-4/5">
                        <label className="label">
                            <span className="text-xl font-bold">Add Instructor Section Heading</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="enter hero sections heading"></textarea>
                    </div>
                    <div className="form-control  mt-6 w-1/5">
                        <button className="items-center border-2 border-[var(--secondary-color)] md:py-2 py-1 md:px-3 px-2 rounded-full bg-[var(--secondary-color)] text-white hover:bg-transparent hover:text-[var(--secondary-color)] font-semibold duration-300 w-full self-center" type="submit">Add Heading</button>
                    </div>
                </div>
                {/* add instructor sections subheading */}
                <div className='flex justify-between gap-20'>
                    <div className="form-control w-4/5">
                        <label className="label">
                            <span className="text-xl font-bold">Add Instructor Section Sub-eading</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="enter hero sections heading"></textarea>
                    </div>
                    <div className="form-control mt-6 w-1/5">
                        <button className="items-end border-2 border-[var(--secondary-color)] md:py-2 py-1 md:px-3 px-2 rounded-full bg-[var(--secondary-color)] text-white hover:bg-transparent hover:text-[var(--secondary-color)] font-semibold duration-300 w-full justify-end" type="submit">Add Sub-heading</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Settings;