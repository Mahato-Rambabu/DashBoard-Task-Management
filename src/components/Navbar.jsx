import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FiSun, FiUser } from 'react-icons/fi'
import { GrSearch } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = ({ toggleSidebar, toggleTheme, title }) => {
    return (
        <div className='fixed h-[8vh] w-full flex items-center justify-between px-4 border-b-2 bg-white z-10' >
            <div className=' flex gap-2 items-center'>
                <RxHamburgerMenu
                    size={38}
                    className='hover:bg-gray-100 rounded-md hover:rounded-full p-2 cursor-pointer' onClick={toggleSidebar} />
                <img src="./logo1.svg" alt="" className='h-10 w-10'/>
                <h1 className='text-xl hidden sm:block'>{title}</h1>
            </div >

            <div className=' p-4 flex gap-4 items-center bg-gray-100 rounded-lg h-12 w-[50%] focus-within:bg-white focus-within:shadow-md sm:w-1/2'>
                <GrSearch className='text-gray-500 text-xl hover:rounded-full hover:bg-gray-200 p-2 cursor-pointer' size={40} />
                <input type="text" placeholder='Search' className='outline-none pl-2 bg-gray-100 w-full focus:bg-white' />
            </div>

            <div className='flex gap-6 '>
                <FiSun size={42} onClick={toggleTheme} className='cursor-pointer hover:bg-gray-100 rounded-md hover:rounded-full p-2'/>
                <FiUser size={42} className='cursor-pointer hover:bg-gray-100 rounded-md hover:rounded-full p-2'/>
            </div>


        </div>
    )
}

export default Navbar