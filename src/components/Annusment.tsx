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
                <a href="https://online.uktech.ac.in/account/ums-page.html"><div className={`w-[18vw] h-[10vw] rounded-[1.5vw] cursor-pointer flex justify-center items-center flex-col bg-[#7D55C7]`}><FaGears color='#fff' size={80} className='w-[14vw] h-[14vw] mx-2' />
                    <p className='text-white font-semibold text-[2vw]'>UMS</p></div></a>
                <a href="https://online.uktech.ac.in/ums/Student/Public/ViewDetail"><div className={`w-[18vw] h-[10vw] rounded-[1.5vw] cursor-pointer flex justify-center items-center flex-col bg-[#7A838A]`}><BsPersonRaisedHand color='#fff' size={80} className='w-[14vw] h-[8vw] mx-2' />
                    <p className='text-white font-semibold lg:text-[2vw] md:text-[2vw] text-[1.5vw]'>Student Attendance</p></div></a>
                <a href="/"><div className={`w-[18vw] h-[10vw] rounded-[1.5vw] cursor-pointer flex justify-center items-center flex-col bg-[#3DAB96]`}><IoBookSharp color='#fff' size={80} className='w-[14vw] h-[14vw] mx-2' />
                    <p className='text-white font-semibold text-[2vw]'>e-Library</p></div></a>
                <a href="/"><div className={`w-[18vw] h-[10vw] rounded-[1.5vw] cursor-pointer flex justify-center items-center flex-col bg-[#EEAA43]`}><TiMessages color='#fff' size={80} className='w-[14vw] h-[14vw] mx-2' />
                    <p className='text-white font-semibold text-[2vw]'>Grievance</p></div></a>
                <a href="/"><div className={`w-[18vw] h-[10vw] rounded-[1.5vw] cursor-pointer flex justify-center items-center flex-col bg-[#D24A87]`}><MdOutlineSportsKabaddi color='#fff' size={80} className='w-[14vw] h-[14vw] mx-2' />
                    <p className='text-white font-semibold text-[2vw]'>Hobby Club</p></div></a>
            </div>

        </>
    )
}

export default Annusment