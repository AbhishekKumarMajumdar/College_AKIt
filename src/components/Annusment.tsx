import React from 'react'
import { FaGears } from "react-icons/fa6";
import { BsPersonRaisedHand } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { MdOutlineSportsKabaddi } from "react-icons/md";

const Annusment = () => {

    return (
        <>
            <div className="flex justify-evenly py-10 mmm flex-row">
                <div className={`w-[260px] h-[156px] rounded-3xl cursor-pointer flex justify-center items-center flex-col bg-[#7D55C7]`}>
                    <FaGears color='#fff' size={80} />
                    <p className='text-white font-semibold '>UMS</p>
                </div>
                <div className={`w-[260px] h-[156px] rounded-3xl cursor-pointer flex justify-center items-center flex-col bg-[#7A838A]`}><BsPersonRaisedHand color='#fff' size={80} />
                    <p className='text-white font-semibold '>Student Attendance</p></div>
                <div className={`w-[260px] h-[156px] rounded-3xl cursor-pointer flex justify-center items-center flex-col bg-[#3DAB96]`}><IoBookSharp color='#fff' size={80} />
                    <p className='text-white font-semibold '>e-Library</p></div>
                <div className={`w-[260px] h-[156px] rounded-3xl cursor-pointer flex justify-center items-center flex-col bg-[#EEAA43]`}><TiMessages color='#fff' size={80} />
                    <p className='text-white font-semibold '>Grievance</p></div>
                <div className={`w-[260px] h-[156px] rounded-3xl cursor-pointer flex justify-center items-center flex-col bg-[#D24A87]`}><MdOutlineSportsKabaddi color='#fff' size={80} />
                    <p className='text-white font-semibold '>Hobby Club</p></div>
            </div>

        </>
    )
}

export default Annusment