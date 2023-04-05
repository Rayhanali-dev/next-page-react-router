import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    const { image, title, subtitle, price, isbn13 } = props.book;

   

    return (
        <Link to={`/books/${isbn13}`}>
            <div className='overflow-hidden relative transition duration-200 shadow-xl rounded-lg hover:-translate-y-3'>
                <img src={image} alt="books-img" className='object-cover w-full' />
                <div className='absolute opacity-0 flex flex-col hover:opacity-75 duration-200 h-full top-0 p-4 left-0 bg-opacity-100 bg-black text-white'>
                    <p className='text-2xl mb-6'>{title}</p>
                    <p className='text-2xl'>{subtitle.substring(0, 40)}.....</p>
                    <p className='text-2xl mt-auto'>Price {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;