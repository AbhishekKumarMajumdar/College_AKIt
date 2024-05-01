import React from 'react'
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import CodeIcon from '@rsuite/icons/Code';
import PageIcon from '@rsuite/icons/Page';
import Navlink from './Navlink';

const dropdown = () => {
    return (
        <div className='lg:hidden w-[96vw] md:hidden sm:w-[80vw] flex flex-row relative left-[94wv]'>
            <Dropdown title="--" icon={<CodeIcon />}>
                <Dropdown.Item icon={<PageIcon />}>
                    <Navlink link='/' text='Home' />
                </Dropdown.Item>
                <Dropdown.Item icon={<PageIcon />}>
                    <Navlink link='/' text='About Us' />
                </Dropdown.Item>
                <Dropdown.Item icon={<PageIcon />}>
                    <Navlink link='/' text='Admission' />
                </Dropdown.Item>
                <Dropdown.Item icon={<PageIcon />}>
                    <Navlink link='/' text='Departmants' />
                </Dropdown.Item>
                <Dropdown.Item icon={<PageIcon />}>
                    <Navlink link='/' text='Students Corner' />
                </Dropdown.Item>
                <Dropdown.Item icon={<PageIcon />}>
                    <Navlink link='/' text='Contact Us' />
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default dropdown
