import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon } from '@heroicons/react/24/solid'


function Footer() {
    return (
        <footer className="bg-gray-900 py-10 border-t border-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
                        <div className="flex flex-col justify-between h-full">
                            <div className="m-4">
                                <Link to="/" className='flex'>
                                    <AcademicCapIcon className='w-20 h-20  text-[#b49bff]' />
                                    <h1 className="text-3xl font-bold text-white my-6 mx-3">Blog</h1>
                                </Link>
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">
                                    &copy; {new Date().getFullYear()} Blog. All Rights Reserved by Chetan Sharma.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
                        <div className="h-full">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Company</h3>
                            <ul>
                                <li className="mb-2">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        About Us
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Blog
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
                        <div className="h-full">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Resources</h3>
                            <ul>
                                <li className="mb-2">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Documentation
                                        </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Tutorials
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Support
                                        </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
                        <div className="h-full">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Legal</h3>
                            <ul>
                                <li className="mb-2">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Cookies Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
