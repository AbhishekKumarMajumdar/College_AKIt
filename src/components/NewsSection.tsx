import React from 'react'
import News from "./News"
import Institute from './Institute'
const NewsSection = () => {
    return (
        <>
            <div className=" w-[100vw] h-[30vh] py-2 px-16 grid mb-10 grid-cols-12 gap-8">
                <div className="col-span-3 ">    <News /></div>
                <div className="col-span-6 ">    <Institute /></div>
                <div className="col-span-3 ">    <News /></div>


            </div>
        </>
    )
}

export default NewsSection