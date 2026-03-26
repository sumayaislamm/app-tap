import React from 'react';
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='m-8'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center p-5'>
                We Build <br />
                <span className="text-blue-500">Productive</span> Apps
            </h1>
            <p className='max-w-2xl mx-auto text-sm sm:text-lg text-gray-500 text-center px-4'>
                At AppTap, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.  Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center my-8">


                <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                    <button className="btn border-2 border-gray-400 bg-transparent text-black hover:bg-gray-100">
                        <FaGooglePlay className="text-lg" />
                        Google Play
                    </button>
                </a>

                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <button className="btn border-2 border-gray-400 bg-transparent text-black hover:bg-gray-100">
                        <FaApple className="text-lg" />
                        App Store
                    </button>
                </a>

            </div>
        </div>
    );
};

export default Banner;