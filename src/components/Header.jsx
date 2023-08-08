import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);
    const pathMatchRoute = (route) => {
        if (route == location.pathname) {
            return true;
        }
    };
    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-50">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                <div>
                    <img
                        src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                        alt="logo"
                        className="h-5 cursor-pointer"
                        onClick={() => navigate('/')}
                    />
                </div>
                <div className="">
                    <ul className="flex space-x-10">
                        <Link to="/">
                            <li
                                className={
                                    location.pathname == '/'
                                        ? 'py-3 text-sm font-semibold border-b-[3px] text-black border-b-red-500'
                                        : 'py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent'
                                }
                            >
                                Home
                            </li>
                        </Link>
                        <Link to="/offers">
                            <li
                                className={
                                    location.pathname == '/offers'
                                        ? 'py-3 text-sm font-semibold border-b-[3px] text-black border-b-red-500'
                                        : 'py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent'
                                }
                            >
                                Offers
                            </li>
                        </Link>
                        <Link to="/sign-in">
                            <li
                                className={
                                    location.pathname == '/sign-in'
                                        ? 'py-3 text-sm font-semibold border-b-[3px] text-black border-b-red-500'
                                        : 'py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent'
                                }
                            >
                                Sign in
                            </li>
                        </Link>
                    </ul>
                </div>
            </header>
        </div>
    );
}
