import React from 'react'
import { Link } from 'react-router-dom';
import { GoVerified } from 'react-icons/go'
import { abbreviateNumber } from "js-abbreviation-number";

export default function VideoCard({ videoDetails }) {
    return (
        <Link to={`/video/${videoDetails?.video?.videoId}`}>
            <div className='flex flex-col cursor-pointer hover:bg-[#ff00ff]/[0.2] transition-all transform-cpu rounded-xl p-2'>
                <div className='relative w-full h-full'>
                    <img src={videoDetails?.video?.thumbnails[0]?.url} alt="Tumbnail" className='object-cover w-full rounded-xl' />
                </div>
                <div className='flex p-3 gap-2'>
                    <img src={videoDetails?.video?.author?.avatar[0]?.url} className="rounded-full object-contain h-8 " alt="" />
                    <div className='flex flex-col gap-2'>
                        <h2 className='line-clamp-2 text-base font-medium'>
                            {videoDetails?.video?.title}
                        </h2>
                        <div className='flex flex-col'>
                            <div className='flex items-center text-gray-100/[0.6] justify-start gap-1'>
                                <span className='text-sm line-clamp-1'>{videoDetails?.video?.author?.title}</span>
                                {videoDetails?.video?.author?.badges[0]?.type == "VERIFIED_CHANNEL" ? (<GoVerified />) : ""}
                            </div>
                            <div className='text-xs flex items-center justify-start text-gray-100/[0.6] gap-1'>
                                <span>
                                    {abbreviateNumber(videoDetails?.video?.stats?.views, 1)} views
                                </span>
                                <span className='align-middle'>.</span>
                                <span>
                                    {videoDetails?.video?.publishedTimeText}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}
