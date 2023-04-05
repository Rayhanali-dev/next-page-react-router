import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/94115-reading-boy.json";
const Home = () => {

    return (
        <div className='max-w-7xl mt-10 mx-auto items-center flex flex-col  justify-between lg:flex-row'>
            {/* Text Content */}
            <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                <div className='max-w-xl lg:mt-8'>
                    <div>
                        <p className='badge bg-orange-600 inline-block rounded-2xl px-4 py-2 font-bold text-white'>On Sale!</p>
                    </div>
                    <h2 className='max-w-lg mb-4 font-sans text-3xl  font-bold tracking-tight text-gray-900 lg:leading-10 sm:text-4xl sm:leading-none'>
                        A reader lives a <br className='hidden md:block' /> thousand lives{' '}
                        <span className='inline-block text-blue-400'>before he dies</span>
                    </h2>
                    <p className='text-base text-gray-700 mb-5 md:text-lg'>
                        Books are a uniquely portable magic. Books serve to show a man that
                        those original thoughts of his aren’t very new after all. The man
                        who does not read good books is no better than the man who can’t.
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                    <Link to='/books' className='btn md:w-auto md:mr-4'>
                        <div className='inline-flex items-center justify-center w-full h-full'>
                            <p className='mr-3'>Visit Store</p>
                            <ShoppingCartIcon className='w-5 text-gray-100' />
                        </div>
                    </Link>
                    <Link
                        to='/about'
                        className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            {/* Lottie Animation */}
            <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;