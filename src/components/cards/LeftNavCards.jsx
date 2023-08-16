import React from 'react'
import { useAppContext } from '../../util/AppContext'

export default function LeftNavCards(props) {

    const { name, className, type, Icon } = props;
    const { Setcatagory } = useAppContext();

    const action = () => {
        if (type == "home" || "category") {
            Setcatagory(name);
        }

        return;
    }

    return (
        <div onClick={action} className={"group cursor-pointer p-2 ml-3 gap-2 lg:gap-5 flex flex-row items-center justify-start hover:bg-[#e600ff] transition-all transform-cpu rounded-3xl mb-3 md:mb-0 " + className}>
            <Icon className="text-xl" />
            <h1 className='flex-grow text-base font-medium text-left '>{name}</h1>
        </div>
    )
}
