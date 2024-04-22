// components/Card.js

import React from 'react';

const EventCard = ({ imageUrl, title, date, description }: any) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
                <img
                    className="absolute h-full w-full object-cover"
                    src={imageUrl}
                    alt="Card"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-500 text-base mb-2">{date}</p>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default EventCard;
