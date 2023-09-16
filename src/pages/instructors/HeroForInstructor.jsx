import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroForInstructor = () => {
    // Initialize countdown values in state
    const [days, setDays] = useState(15);
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(41);

    useEffect(() => {
        // Function to update the countdown values
        const updateCountdown = () => {
            // Decrease seconds by 1
            setSeconds((prevSeconds) => prevSeconds - 1);

            // Check if seconds reach zero, and if so, update other units
            if (seconds === 0) {
                setSeconds(59);
                setMinutes((prevMinutes) => prevMinutes - 1);

                if (minutes === 0) {
                    setMinutes(59);
                    setHours((prevHours) => prevHours - 1);

                    if (hours === 0) {
                        setHours(23);
                        setDays((prevDays) => prevDays - 1);
                    }
                }
            }
        };

        // Update the countdown every second
        const countdownInterval = setInterval(updateCountdown, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(countdownInterval);
    }, [days, hours, minutes, seconds]);

    return (
        <div className="hero min-h-min" style={{ backgroundImage: 'url(https://i.ibb.co/NtXfR0g/Amazon-com-Best-Yoga-Clothes-For-Women.jpg)', backdropFilter: 'blur(8px)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content flex flex-col">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold ">Fight Stress & Find Serenity</h1>
                    <p className="mb-5">Meet our wordls best yoga teachers. Who are experienced.</p>
                    <Link className='custom-btn-primary' to='/classes'>Enroll Now</Link>
                </div>
                {/* Countdown is here */}
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">{days}</span> days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">{hours}</span> hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">{minutes}</span> min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">{seconds}</span> sec
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroForInstructor;
