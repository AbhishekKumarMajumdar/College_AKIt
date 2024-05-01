import Image from 'next/image'
import React from 'react'
import BannerPic from "@/Image/institute.jpg"
const Banner = () => {
    return (
        <>
            <div className=" w-[100vw] border-4 border-black">
                <Image
                    src={BannerPic}
                    alt='dd'
                    className='w-[100vw] h-[100%]'
                />
            </div>
        </>
    )
}

export default Banner