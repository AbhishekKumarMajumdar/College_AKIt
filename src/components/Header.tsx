import Image from 'next/image'
import React from 'react'
import HeaderPic from "@/Image/header.png"
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <div className='h-[200px] min-w-full flex justify-center items-center'>
                <Image
                    src={HeaderPic}
                    alt="header picture"
                    className='w-[95%] h-[90%]'
                />
            </div>
            <Navbar />

        </>
    )
}

export default Header