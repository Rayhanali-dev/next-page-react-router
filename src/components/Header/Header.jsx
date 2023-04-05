import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className='bg-orange-300 py-5 px-6 sm:px-0'>
                <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <div className="logo">
                        <Link className='flex items-center gap-1' to={`/`}>
                            <BoltIcon className='w-8 h-6 text-white'></BoltIcon>
                            <h3 className='text-2xl'>NextPage</h3>
                        </Link>
                    </div>
                    <div className='sm:hidden' onClick={() => setOpen(!open)}>
                        <span>
                            {
                                open ? <XMarkIcon className='w-6 h-6'></XMarkIcon> : <Bars3Icon className='w-6 h-6'></Bars3Icon>
                            }
                        </span>
                    </div>
                    <ul className={` sm:flex sm:gap-6 sm:w-min sm:duration-0 sm:static sm:bg-transparent duration-500 absolute bg-amber-300 w-32  p-4 ${open ? 'top-16 right-0' : '-top-36 right-0'} `}>
                        <li>
                            <NavLink to={`/`} title='home-page'
                                className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/books`} title='book page'
                                className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                                Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/about`} title='about-page'
                                className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;