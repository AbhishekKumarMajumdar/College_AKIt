import Image from 'next/image'
import React from 'react'
import HeaderPic from "@/Image/header.png"
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <div className='min-w-full flex justify-center items-center'>
                <Image
                    src={HeaderPic}
                    alt="header picture"
                    className='w-[100vw] h-[100%]'
                />
            </div>
            <Navbar />

        </>
    )
}

export default Header