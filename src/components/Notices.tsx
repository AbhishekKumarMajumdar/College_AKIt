import React from 'react'
import { FaFilePdf } from "react-icons/fa6";
const Notices = (props) => {
    return (
        <div className="flex flex-row justify-center items-center">
            <FaFilePdf color='#c90000' size={40} className=' cursor-pointer w-[3vw] h-[3vw]' />
            <h1 className='text-sm ml-2 font-bold text-black text-[1.8vw]'>{props.content}</h1>
        </div>
    )
}

export default Notices
