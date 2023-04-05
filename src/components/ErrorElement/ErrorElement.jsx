import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h3 className='text-4xl text-center font-bold mb-5'>{error.status}</h3>
            <h3 className='text-4xl text-center font-bold mb-5'>{error.statusText}</h3>
            <h3 className='text-4xl text-center font-bold mb-5'>{error.error.message}</h3>
        </div>
    );
};

export default ErrorElement;