import React from 'react'

const Overlay = (props: { data: any }) => {
    console.log(props.data[1].color)
    return (
        <>
            <div className={`w-[260px] h-[156px] rounded-3xl cursor-pointer bg-["${props?.data[1]?.color}"]`}></div>
        </>
    )
}

export default Overlay