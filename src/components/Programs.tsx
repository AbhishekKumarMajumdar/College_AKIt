// pages/index.js

import React from 'react';
import Card from './Card';
import cse from "@/Image/cse.jpg"
const IndexPage = () => {
    return (
        <>
            <h1 className='text-center text-blue-500 text-3xl font-bold p-4 '>Programed Offered</h1>
            <div className="grid grid-cols-3 justify-items-center gap-4 items-center h-auto p-2 mt-4 ">

                <Card
                    imageUrl={cse}
                    title="Computer Science & Engineering"
                    subtitle="Institute offers the B.Tech course in Computer Science & Engineering. This department is equipped with latest computers with a server room. The department has made available several facilities in the institute such as internet"
                />
                <Card
                    imageUrl={cse}
                    title="Artificial Intelligence & Machine Learning Engineering"
                    subtitle="Artificial intelligence is a technology that enables a machine to simulate human behavior. Machine learning is a subset of AI which allows a machine to automatically learn from past data without programming explicitly. "
                />
                <Card
                    imageUrl={cse}
                    title="Robotics & Automation"
                    subtitle="Robotics is a field of engineering that deal with design and application of robots and the use of computer for their manipulation and processing. Robots are used in industries for speeding up the manufacturing process. "
                />
                <Card
                    imageUrl={cse}
                    title="Mechanical Engineering"
                    subtitle="The Department of Mechanical Engineering from the day of its inception, has been taking long strides in the field of science and Engineering. "
                />
                <Card
                    imageUrl={cse}
                    title="Civil Engineering"
                    subtitle="The Civil Engineering Department is one among the newest departments in the Non-Grant engineering institution in the state of Uttrakhand. The department is having qualified and dedicated staff members in diversified field of specialization."
                />
                <Card
                    imageUrl={cse}
                    title="Sample Title"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
            </div>
        </>
    );
};

export default IndexPage;

