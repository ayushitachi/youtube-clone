import React from 'react'
import "../index.css"

export default function Loader() {
    return (
        <div className='fixed top-0 left-0 w-full h-[3px]'>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}
