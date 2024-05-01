import React from 'react'
import Notices from './Notices'

const news = () => {
    return (
        <>
            <div className="py-4 px-2 flex flex-col justify-center rounded-lg gap-4 lg:w-[20vw] w-[26vw] items-center border-4 border-red-500">
                <p className='text-lg text-[#356EC8] font-bold'>Notices & News</p>
                <Notices content='Febraury - 26 '/>
                <Notices content='Febraury - 26 '/>
                <Notices content='Febraury - 26 '/>
            </div>
        </>
    )
}

export default news