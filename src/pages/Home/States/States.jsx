import React from 'react';


const States = () => {
    return (

        <>
            <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-10">

                <h2 className=" font-bold text-3xl  text-center mb-10 ">
                    Trusted By Millions, Built For You
                </h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center px-4">

                    <div className='space-y-2 '>

                        <h1 className="text-sm opacity-80 font-bold">Total Downloads</h1>
                        <h3 className="text-4xl font-bold">29.6M</h3>
                        <p className="text-xs opacity-70">21% More Than Last Month</p>
                    </div>
                    <div className='space-y-2 '>
                        <h1 className=" text-sm font-bold opacity-80 ">Total Reviews</h1>
                        <h3 className=" font-bold text-4xl">906K</h3>
                        <p className=" text-xs opacity-70">16% More Than Last Month</p>
                    </div>
                    <div className='space-y-2 '>
                        <h1 className="text-sm font-bold opacity-80">Active Apps</h1>
                        <h3 className="text-4xl font-bold">132+</h3>
                        <p className="text-xs opacity-70">31 More Will Launch</p>
                    </div>


                </div>

            </div>

        </>
    );
};

export default States;