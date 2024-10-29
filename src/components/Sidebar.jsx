import React, { useState } from 'react'
import { LuListTodo } from 'react-icons/lu'
import { BsCalendar3Event, BsFilesAlt } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Sidebar = ({ isOpen }) => {
    const [isOpenHover, setOpenHover] = useState(false)

    function handleMouseEnter() {
        if (!isOpen) {
            setOpenHover(true)
        }
    }

    function handleMouseLeave() {
        if (!isOpen) {
            setOpenHover(false)
        }
    }


    return (
        <div className={`${isOpen || isOpenHover ? 'w-[60%] md:w-[20%] ' : 'w-[86px] '}  h-[100vh]  pt-[6vh] flex flex-col items-start `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ul className='py-6 text-base cursor-pointer w-full'>
                <Link to="/todos">
                    <li className='flex gap-6 items-center  hover:bg-green-200 px-6 py-4 hover:rounded-r-full'>
                        <LuListTodo size={28} />
                        {(isOpen || isOpenHover) && (<span> ToDos</span>)}
                    </li>
                </Link>
                <Link to='/projects'>
                    <li className='flex gap-6 items-center  hover:bg-green-200 px-6 py-4 hover:rounded-r-full'>
                        <BsFilesAlt size={26} />
                        {(isOpen || isOpenHover) && (<span> Project</span>)}
                    </li>
                </Link>
                <Link to='/calender'>
                    <li className='flex gap-6 items-center  hover:bg-green-200 px-6 py-4 hover:rounded-r-full'>
                        <BsCalendar3Event size={25} />
                        {(isOpen || isOpenHover) && (<span> Calendar</span>)}
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar;
