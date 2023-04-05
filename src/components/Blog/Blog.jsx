import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const Blog = () => {
    const books = useLoaderData();

    const navigation = useNavigation()

    if(navigation.state === 'loading') {
        return <LoaderSpinner></LoaderSpinner>
    }

    return (
        <div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-7xl gap-6 mt-11'>
                {
                    books.books.map(book => <BookCard book={book} key={book.isbn13}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Blog;