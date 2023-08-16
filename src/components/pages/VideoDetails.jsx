import React, { useEffect, useState } from 'react'
import getApiData from '../../util/api'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { GoVerified } from 'react-icons/go'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import "../../index.css"
import RelatedVideoCard from "../cards/RelatedVideoCard"
import { useAppContext } from '../../util/AppContext';

export default function VideoDetails() {

    const { videoId } = useParams();
    const [video, Setvideo] = useState();
    const [relatedVideos, SetRelatedVideos] = useState();
    const { loading, Setloading } = useAppContext();

    const fetchVideoDetails = () => {
        Setloading(val => !val)
        getApiData(`video/details/?id=${videoId}`).then(res => {
            Setvideo(res?.data);
            Setloading(val => !val)
        })
    }

    const fetchRelatedVideos = () => {
        Setloading(val => !val)
        getApiData(`video/related-contents/?id=${videoId}`).then(res => {
            SetRelatedVideos(res?.data?.contents);
            Setloading(val => !val)
        })
    }

    useEffect(() => {
        fetchVideoDetails();
        fetchRelatedVideos();
    }, [videoId])

    return (
        <div className='flex flex-col lg:flex-row h-[calc(100vh-47px)] md:h-[calc(100vh-60px)] w-[90%] pt-5 m-auto md:gap-4 '>
            <div className='flex flex-col  basis-[45%] md:basis-[60%] mb-1'>
                <div className='basis-[70%]'>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${videoId}`}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className='basis-[30%]'>
                    <div className='py-2 my-2'>
                        <h1 className='text-sm md:text-base lg:text-xl font-medium line-clamp-2'>{video?.title}</h1>
                    </div>
                    <div className='flex justify-between items-center '>
                        <div className='flex justify-between gap-4 '>
                            <img src={video?.author?.avatar[0]?.url} alt="" className='rounded-3xl cursor-pointer ' />
                            <div className='flex flex-col items-start justify-around lg:justify-between cursor-pointer '>
                                <h1 className='text-xs md:text-sm lg:text-xl font-medium'>{video?.author?.title} <span className='inline-block'> {video?.author?.badges[0]?.type == "VERIFIED_CHANNEL" && <GoVerified className='text-xs' />}</span> </h1>
                                <h2 className='text-xs text-gray-200/[0.8]'>
                                    {video?.author?.stats?.subscribersText}
                                </h2>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='video-btn'>
                                <AiOutlineLike className='text-base md:text-xl lg:text-2xl' />
                                <span className='text-sm md:text-base lg:text-lg ml-2 font-medium'>{abbreviateNumber(video?.stats?.likes, 1)}</span>
                            </div>
                            <div className='video-btn'>
                                <AiOutlineDislike className='text-base md:text-xl lg:text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' basis-[55%] md:basis-[40%] overflow-y-auto scrollbar-hide'>
                {relatedVideos?.map(item => {
                    return (
                        <RelatedVideoCard key={item?.video?.videoId} videoDetails={item} />
                    )
                })}
            </div>

        </div>
    )
}
