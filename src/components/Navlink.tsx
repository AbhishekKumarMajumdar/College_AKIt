import React from 'react'
import Link from 'next/link'
const Navlink = (props) => {
  return (
    <Link href={props.link} className="text-black font-sans lg:text-xl text-[0.8em] px-2  hover:text-blue-500">{props.text}</Link>
  )
}

export default Navlink
