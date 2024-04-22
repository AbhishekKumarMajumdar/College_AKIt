"use client"
import { useState } from 'react';

const Navbar = () => {
    const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);

    const toggleCourseMenu = () => {
        setIsCourseMenuOpen(!isCourseMenuOpen);
    };

    return (
        <nav className="bg-white p-4">
            <div className="max-w-7xl mx-auto flex justify-center items-center">
                <div className="flex items-center gap-8">
                    <a href="#" className="text-black font-sans text-xl p-2  hover:text-blue-500 ">
                        Home
                    </a>
                    <a href="#" className="text-black font-sans text-xl p-2  hover:text-blue-500 ">
                        About Us
                    </a>
                    <a href="#" className="text-black font-sans text-xl p-2  hover:text-blue-500 ">
                        Academics
                    </a>
                    <a href="#" className="text-black font-sans text-xl p-2  hover:text-blue-500 ">
                        Admission
                    </a>
                    <a href="#" className="text-black font-sans text-xl p-2  hover:text-blue-500 ">
                        Departments
                    </a>
                    <a href="#" className="text-black font-sans text-xl p-2  hover:text-blue-500 ">
                        Student Corner
                    </a>
                    <a href="#" className="text-black font-sans text-xl p-2  hover:text-blue-500 ">
                        Placements
                    </a>
                    <a href="#" className="text-black font-sans text-xl p-2  hover:text-blue-500 ">
                        Contact Us
                    </a>

                    <div className="relative ml-4">
                        <a
                            href="#"
                            className="text-white hover:text-gray-300"
                            onMouseEnter={toggleCourseMenu}
                            onMouseLeave={toggleCourseMenu}
                        >
                            Course
                        </a>
                        {isCourseMenuOpen && (
                            <div className="absolute bg-gray-800 py-2 px-4 mt-2 rounded shadow-lg">
                                <a href="#" className="block text-white hover:text-gray-300">
                                    Course 1
                                </a>
                                <a href="#" className="block text-white hover:text-gray-300">
                                    Course 2
                                </a>
                                <a href="#" className="block text-white hover:text-gray-300">
                                    Course 3
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
