import React from 'react';
import data from '../../../../public/data.json';
import { AiFillStar } from 'react-icons/ai';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router';

const HomeApps = () => {
    return (
        <>
            <div className='my-10'>
                <div className='space-y-4 '>
                    <h1 className='mx-10 font-bold text-4xl text-gray-800 text-center'>Trending Apps</h1>
                    <p className='mx-10 text-lg text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer'>
                    {data.slice(0, 8).map((app) => (

                        <Link to={`/app/${app.id}`}>
                            <div
                                key={app.id}
                                className='bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300'
                            >
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className='w-full h-40 object-cover'
                                />
                                <div className='p-4'>
                                    <h2 className='font-semibold text-lg text-gray-800'><span>{app.title}-{app.companyName}</span></h2>
                                    <div className='flex justify-between gap-5'>
                                        <p className='text-gray-500 text-sm flex items-center gap-1'><FaDownload className="text-blue-500" /> {app.downloads}</p>
                                        <p className='text-yellow-500 font-medium flex items-center gap-1'><AiFillStar className="text-yellow-400" />  {app.ratingAvg} </p>
                                    </div>
                                </div>
                            </div>
                        </Link>


                    ))}
                </div>


                <div className='mx-auto items-center w-fit text-center mt-10'>
                    <a href="/apps" className='btn btn-primary '>Show All</a>
                </div>
            </div>

        </>
    );
};

export default HomeApps;


