import React from 'react'
import { categories } from "../util/constants"
import LeftNavCards from './cards/LeftNavCards'
import { useAppContext } from '../util/AppContext'

export default function LeftNav() {

    const { catagory, mobileToggle } = useAppContext();

    return (
        <div className={`md:flex flex-col basis-0 gap-2 md:basis-[15%]  scrollbar-hide z-10 overflow-y-auto translate-x-[-200px] md:translate-x-0 ${mobileToggle ? "absolute bg-[#0a1929] transition-transform translate-x-[0px] h-[calc(100vh-60px)] " : ""} `}>
            {categories.map(item => {

                return (
                    <>
                        <LeftNavCards key={item.name} className={item.name == catagory ? "bg-[#9100b2]" : ""} name={item.type == 'home' ? "New" : item.name} Icon={item.icon} type={item.type} />
                        {item?.divider && (<hr key={item.type} className='w-[90%] m-auto '></hr>)}
                    </>
                )

            })}
            <hr className='w-[90%] m-auto '></hr>
            <p className='text-sm text-left pl-4 py-2 text-gray-200/[0.5]'>cloned by {<br></br>}Ayush Choudhary</p>
        </div>
    )
}
