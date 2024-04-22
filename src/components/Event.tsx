// pages/index.js

import React from 'react';
import Card from './Card';
import cse from "@/Image/cse.jpg"
import EventCards from './EventCard';
const EventCard = () => {
    return (
        <>
            <h1 className='text-center text-blue-500 text-3xl font-bold p-4 '>Programed Offered</h1>
            <div className="grid grid-cols-3 justify-items-center gap-4 items-center h-auto p-2 mt-4 ">

                <EventCards
                    imageUrl="https://via.placeholder.com/800x450"
                    title="Sample Title"
                    date="April 1, 2024"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <EventCards
                    imageUrl="https://via.placeholder.com/800x450"
                    title="Sample Title"
                    date="April 1, 2024"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <EventCards
                    imageUrl="https://via.placeholder.com/800x450"
                    title="Sample Title"
                    date="April 1, 2024"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </>
    );
};

export default EventCard;

