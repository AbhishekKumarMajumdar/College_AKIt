import React from 'react'
import News from "./News"
import Institute from './Institute'
const NewsSection = () => {
    return (
        <>
            <div className=" py-2 lg:px-16 px-[4vw] flex mb-10 lg:gap-8 gap-4 w-[90vw]">
                <div className="">    <News /></div>
                <div className="">    <Institute /></div>
                <div className="hidden lg:inline-block">    <News /></div>


            </div>
        </>
    )
}

export default NewsSection