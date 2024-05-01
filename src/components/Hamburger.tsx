import React from 'react'
import Navlink from '../components/Navlink'

const Hamburger = () => {
  return (
    <div className='flex gap-4 mt-[4vw] item-center flex-col justify-center w-[96vw] transition-all'>
      <Navlink link='/' text='Home' />
      <Navlink link='/' text='About Us' />
      <Navlink link='/' text='Admission' />
      <Navlink link='/' text='Departmants' />
      <Navlink link='/' text='Students Corner' />
      <Navlink link='/' text='Contact Us' />
    </div>
  )
}

export default Hamburger
