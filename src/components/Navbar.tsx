"use client"
import { useState } from 'react';
import Navlink from '../components/Navlink'
import Hamburger from '../components/Hamburger'
import { FaBars } from "react-icons/fa"



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white p-4 lg:my-10 md:my-5 sm:my-0 fle flex-row justify-end">
            <div className="max-w-7xl lg:block w-[96vw] items-end justify-end">
                <div className="items-center justify-center w-[96vw] lg:inline-block md:inline-block md:text-xl hidden">
                    <div className='flex gap-8 justify-self-end item-center justify-center w-[96vw]'>
                        <Navlink link='/' text='Home' />
                        <Navlink link='/' text='About Us' />
                        <Navlink link='/' text='Admission' />
                        <Navlink link='/' text='Departmants' />
                        <Navlink link='/' text='Students Corner' />
                        <Navlink link='/' text='Contact Us' />
                    </div>
                    </div>
                <FaBars className='lg:hidden md:hidden text-[4vw]' onMouseDown={toggleMenu} />
                {isMenuOpen&&<Hamburger/>}
            </div>
        </nav>
    );
};

export default Navbar;
