import React from 'react';
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-5"
        >

            <div
                className="relative w-100 h-100 flex items-center justify-center"
                style={{
                    backgroundImage: "url('/404.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >

                <img
                    src="/405.png"
                    alt="foreground"
                    className="w-80 h-50 mt-20 ml-5"
                />
            </div>
            <h2 className="text-3xl font-semibold mb-2">Opppss! Page Not Found</h2>

            <p className="text-gray-600 mb-6 text-center">
                The page you are looking for does not exist.
            </p>

            <Link to="/" className="btn btn-primary">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;