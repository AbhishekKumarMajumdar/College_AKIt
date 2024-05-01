import React from 'react'
import { FaFilePdf } from "react-icons/fa6";
const Notices = (props) => {
    return (
        <div className="flex flex-row justify-center items-center">
            <FaFilePdf color='#c90000' size={40} className=' cursor-pointer' />
            <h1 className='text-sm ml-2 font-bold text-black'>{props.content}</h1>
        </div>
    )
}

export default Notices
