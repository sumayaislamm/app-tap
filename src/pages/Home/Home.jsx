import React from 'react';
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Home = () => {
    return (
        <div className='m-8'>
            <h1 className='text-6xl font-bold text-center items-center p-5'>
                We Build <br />
                <span className="text-blue-500">Productive</span> Apps
            </h1>
            <p className='mx-10 text-lg text-gray-500 text-center'>
                At AppTap, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.  Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="text-center space-x-4">

                <button className="btn border-2 border-gray-400 bg-transparent text-black hover:bg-gray-100">
                    <FaGooglePlay className="text-lg" />
                    Google Play
                </button>

                <button className="btn border-2 border-gray-400 bg-transparent text-black hover:bg-gray-100">
                    <FaApple className="text-lg" />
                    App Store
                </button>

            </div>
        </div>
    );
};

export default Home;