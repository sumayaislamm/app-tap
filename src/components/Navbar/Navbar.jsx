import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-500 font-bold border-b-1 border-blue-500 pb-1"
                        : "border-b-1 border-transparent pb-1"
                }
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/apps"
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-500 font-bold border-b-1 border-blue-500 pb-1"
                        : "border-b-1 border-transparent pb-1"
                }
            >
                Apps
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/installation"
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-500 font-bold border-b-1 border-blue-500 pb-1"
                        : "border-b-1 border-transparent pb-1"
                }
            >
                Installation
            </NavLink>
        </li>
    </>;
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl">
                    AppTap
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink
                    to="/contribution"
                    className={({ isActive }) =>
                        `btn text-white ${isActive
                            ? "btn btn-primary"
                            : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0"
                        }`
                    }
                >
                    Contribute
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;