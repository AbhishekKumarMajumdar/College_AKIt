import Image from 'next/image'
import React from 'react'
import Govt from "@/Image/GOI.jpg"
import AICTE from "@/Image/AICTE.jpeg"
import Ugc from "@/Image/UGC.png"
import Uk from "@/Image/UK.png"
import Utu from "@/Image/Uttarakhand_Technical_University_logo.png"
const Sponsor = () => {
    return (
        <div className='py-8 px-24 flex flex-row justify-center gap-32 items-center'>
            <div>

                <Image
                    src={Govt}
                    alt='Govt. of india'
                    width={150}
                    height={300}
                />
                <p className='text-center text-gray-500 '>Government of India</p>
            </div>
            <div>

                <Image
                    src={AICTE}
                    alt='AICTE'
                    width={120}
                    height={120}
                />
                <p className='text-center text-gray-500 pt-4'>AICTE</p>
            </div>
            <div>
                <Image
                    src={Ugc}
                    alt='Ugc'
                    width={120}
                    height={120}
                />
                <p className='text-center text-gray-500 pt-4'>UGC</p>

            </div>
            <div>

                <Image
                    src={Uk}
                    alt='Ugc'
                    width={100}
                    height={100}
                />
                <p className='text-center text-gray-500 pt-4'>Government of<br /> Uttarakhand</p>
            </div>
            <div>

                <Image
                    src={Utu}
                    alt='Ugc'
                    width={120}
                    height={120}
                />
                <p className='text-center text-gray-500 pt-4'>Uttarakhand Technical<br /> University</p>
            </div>

        </div>
    )
}

export default Sponsor