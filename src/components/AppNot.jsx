import React from 'react';
import { Link } from "react-router-dom";

const AppNot = () => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-5 py-10"
        >

            <div
                className="relative w-100 h-50 flex items-center justify-center"
                style={{
                    backgroundImage: "url('/cat.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >

                <img
                    src="/bk.png"
                    alt="foreground"
                    className="w-80 h-50 mt-20 "
                />
            </div>

            <h2 className="text-3xl font-semibold mb-2">App Not Found</h2>

            <p className="text-gray-600 mb-6 text-center">
                The App you are requesting is not found on our system. please try another apps
            </p>

            <Link to="/" className="btn btn-primary">
                Go to Home
            </Link>

        </div>
    );
};

export default AppNot;