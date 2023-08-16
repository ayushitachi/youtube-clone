import React from 'react'
import { Link } from 'react-router-dom'
import { abbreviateNumber } from 'js-abbreviation-number'
import { GoVerified } from 'react-icons/go'


export default function SearchResultCard({ videoDetails }) {
    return (
        <Link to={`/video/${videoDetails?.video?.videoId}`}>
            <div className='flex cursor-pointer gap-2 flex-col md:flex-row  transition-all transform-cpu rounded-xl p-2'>
                <div className=' md:basis-[35%]'>
                    <img src={videoDetails?.video?.thumbnails[0]?.url} alt="Tumbnail" className='object-cover  w-full h-full rounded-xl' />
                </div>

                <div className='flex pl-1 gap-2 md:basis-[45%]'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='line-clamp-2 text-s lg:text-xl font-normal'>
                            {videoDetails?.video?.title}
                        </h2>
                        <div className='flex flex-col'>
                            <div className='flex items-center text-gray-100/[0.6] justify-start gap-1'>
                                <img src={videoDetails?.video?.author?.avatar[0]?.url} alt="" className='rounded-3xl h-[20px] cursor-pointer ' />
                                <span className='text-[10px] md:text-sm line-clamp-1'>{videoDetails?.video?.author?.title}</span>
                                {videoDetails?.video?.author?.badges[0]?.type == "VERIFIED_CHANNEL" ? (<GoVerified className='text-[10px] md:text-xs' />) : ""}
                            </div>
                            <div className=' text-[10px] md:text-sm flex items-center justify-start text-gray-100/[0.6] gap-1'>
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
