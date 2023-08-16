import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { TfiSearch } from 'react-icons/tfi'
import { BiVideoPlus } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { RxAvatar } from 'react-icons/rx'
import youtubeLogo from "../assets/yt-logo.png"
import youtubemobile from "../assets/yt-logo-mobile.png"
import "../index.css"
import { useAppContext } from '../util/AppContext'
import { useNavigate } from "react-router-dom";
import Loader from "./Loader"

export default function Header() {

    const [menuToggle, SetmenuToggle] = useState(false);
    const [search, Setsearch] = useState("");
    const navigate = useNavigate();
    const { loading } = useAppContext();
    const { SetMobileToggle } = useAppContext();

    const toggleSearch = (event) => {
        if (event.key == "Enter" || event.type == "click") {
            navigate(`/search/${search}`)
        }
    }

    const toggleMenu = () => {
        SetmenuToggle(val => !val);
        SetMobileToggle(val => !val);
    }

    return (
        <div className="sticky top-0 pt-2 pb-1 px-2 md:px-4  z-10 bg-[#0a1929]">
            {loading && <Loader />}
            <div className='flex items-center justify-between h-7 md:h-10 '>
                <div className='flex items-center justify-center'>
                    <div className="flex md:hidden cursor-pointer rounded-full hover:bg-[#007fff] active:bg-[#0059b2] p-1" onClick={toggleMenu}>
                        {menuToggle ? (
                            <AiOutlineClose className='text-xl' />
                        ) : (
                            <AiOutlineMenu className='text-xl' />
                        )}
                    </div>
                    <Link to="/" className=' flex items-center'>
                        <img src={youtubeLogo} alt="Youtube" className='w-20 hidden md:block' />
                        <img src={youtubemobile} alt="Youtube" className='w-7 ml-1  md:hidden' />
                    </Link>
                </div>
                <div className='group flex items-center w-64 md:w-[420px] '>
                    <div className=' flex items-center flex-grow pl-2 py-1 md:py-2 rounded-l-3xl border-[0.2px] border-gray-100/[0.2] cursor-pointer focus-within:border-sky-300'>
                        <div className=' hidden group-focus-within:block'>
                            <TfiSearch className='text-xl p-1 md:p-[1.9px] ' />
                        </div>
                        <input type="text"
                            placeholder='Search'
                            className='bg-transparent text-white border-none outline-none text-l ml-2 font-thin w-full'
                            onChange={e => Setsearch(e.target.value)}
                            value={search}
                            onKeyUp={e => toggleSearch(e)}
                        />
                    </div>
                    <button className='bg-gray-100/[0.2] p-2 rounded-r-3xl md:h-[41.28px] h-[33.6px]' onClick={toggleSearch}>
                        <TfiSearch />
                    </button>
                </div>

                <div className=' items-center gap-3 hidden sm:flex'>
                    <BiVideoPlus className='btn-header' />
                    <IoIosNotificationsOutline className='btn-header' />
                    <RxAvatar className='btn-header' />
                </div>

            </div>
        </div>
    )
}

