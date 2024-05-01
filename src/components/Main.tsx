import React from 'react'
import Sponsor from './Sponsor'
import Banner from './Banner'
import Annusment from './Annusment'
import Program from './Programs'
import NewsSection from './NewsSection'
import EventCard from './Event'

const Main = () => {
    return (
        <div>
            <Banner />
            <Annusment />
            <NewsSection />
            <Program />
            <EventCard />
            <Sponsor />
        </div>
    )
}

export default Main