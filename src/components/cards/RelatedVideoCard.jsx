import React from 'react'
import { Link } from 'react-router-dom'
import { abbreviateNumber } from 'js-abbreviation-number'
import { GoVerified } from 'react-icons/go'


export default function RelatedVideoCard({ videoDetails }) {
    return (
        <Link to={`/video/${videoDetails?.video?.videoId}`}>
            <div className='flex h-28 cursor-pointer hover:bg-[#ff00fb]/[0.2] transition-all transform-cpu rounded-xl p-2'>
                <img src={videoDetails?.video?.thumbnails[0]?.url} alt="Tumbnail" className=' basis-[25%] object-cover rounded-xl' />

                <div className='flex pl-1 gap-2 basis-[75%]'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='line-clamp-2 text-[11px] lg:text-sm font-normal'>
                            {videoDetails?.video?.title}
                        </h2>
                        <div className='flex flex-col'>
                            <div className='flex items-center text-gray-100/[0.6] justify-start gap-1'>
                                <span className='text-[10px] md:text-xs line-clamp-1'>{videoDetails?.video?.author?.title}</span>
                                {videoDetails?.video?.author?.badges[0]?.type == "VERIFIED_CHANNEL" ? (<GoVerified className='text-[10px] md:text-xs' />) : ""}
                            </div>
                            <div className=' text-[10px] md:text-xs flex items-center justify-start text-gray-100/[0.6] gap-1'>
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
