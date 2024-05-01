import Image from 'next/image'
import React from 'react'
import Sponsers from '../Image/sponsers.png'
const Sponsor = () => {
    return (
        <Image src={Sponsers} alt='sponser' height={80} width={1440} className='w-[96vw] mx-[2vw] my-[4vw]'/>
    )
}

export default Sponsor