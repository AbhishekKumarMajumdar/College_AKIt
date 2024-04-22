// components/Card.js

import Image from 'next/image';
import React from 'react';
Image
const Card = ({ imageUrl, title, subtitle }: any) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <Image className="w-[100%]" width={100} height={50} src={imageUrl.src} alt="Card" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{subtitle}</p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Card;
