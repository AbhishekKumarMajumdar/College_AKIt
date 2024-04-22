import Image from 'next/image'
import React from 'react'
import BannerPic from "@/Image/institute.jpg"
const Banner = () => {
    return (
        <>
            <div className=" min-w-full h-[100vh] border-4 border-black">
                <Image
                    src={BannerPic}
                    alt='dd'
                    className='min-w-full h-[100%]'
                />
            </div>
        </>
    )
}

export default Banner