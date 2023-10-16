import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../../../public/error.json';
import { Link } from 'react-router-dom';


const ErrorPage = () => {

    return (
        <>
            <div className='flex flex-col items-center'>
                <Lottie animationData={errorAnimation} className="w-4/5" />
            </div>
            <div className='text-center mt-5'>
                <h2 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
                <p className="text-gray-600">We are sorry, but an error occurred while processing your request.</p>
                <p className="text-gray-600">Please try again later.</p>
                <Link className='btn btn-danger mt-2' to='/'>Go to Home</Link>
            </div>
        </>
    );
};

export default ErrorPage;