import React from 'react'
import { FaFilePdf } from "react-icons/fa6";

const news = () => {
    return (
        <>
            <div className="py-4 px-2 flex flex-col justify-center rounded-lg h-[100%] gap-4 items-center border-4 border-red-500">
                <p className='text-lg text-[#356EC8] font-bold'>Notices & News</p>
                <div className="flex flex-row justify-center items-center">
                    <FaFilePdf color='#c90000' size={40} className=' cursor-pointer' />
                    <h1 className='text-sm ml-2 font-bold text-black'>Newsletter - February 2022</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <FaFilePdf color='#c90000' size={40} className=' cursor-pointer' />
                    <h1 className='text-sm ml-2 font-bold text-black'>Newsletter - February 2022</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <FaFilePdf color='#c90000' size={40} className=' cursor-pointer' />
                    <h1 className='text-sm ml-2 font-bold text-black'>Newsletter - February 2022</h1>
                </div>
            </div>
        </>
    )
}

export default news