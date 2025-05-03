import React from 'react';
import { NavLink } from 'react-router';

const Banner = () => {
    return (
        <div>
           
           <div className='mt-6 container mx-auto px-2'>
            <div className='bg-[#1313130D] py-8 flex gap-8 flex-col justify-center items-center md:flex-row px-4 md:px-56 rounded-2xl'>
                <div className='space-y-8 flex-1'>
                    <h1 className='text-3xl md:text-5xl font-bold md:leading-14'>Books to freshen up your bookshelf</h1>
                    <NavLink to='/listed-books'> <button className="btn bg-[#23BE0A] text-white">View the List</button></NavLink>
                </div>
                <div>
                    <img className='w-38 md:w-56' src="header.svg" alt="" />
                </div>
            </div>
        </div>

        </div>
    );
};

export default Banner;