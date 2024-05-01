import React from 'react'
import News from "./News"
import Institute from './Institute'
const NewsSection = () => {
    return (
        <>
            <div className=" py-2 px-16 grid mb-10 grid-cols-12 gap-8">
                <div className="lg:col-span-3 md:col-span-4 col-span-4">    <News /></div>
                <div className="lg:col-span-6 md:col-span-8 col-span-8">    <Institute /></div>
                <div className="lg:col-span-3 md:hidden hidden lg:inline-block">    <News /></div>


            </div>
        </>
    )
}

export default NewsSection