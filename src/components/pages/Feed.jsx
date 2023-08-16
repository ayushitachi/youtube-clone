import React from 'react'
import LeftNav from '../LeftNav'
import { useAppContext } from '../../util/AppContext'
import VideoCard from '../cards/VideoCard';
// h-[calc(100% + 40px)]
// h-[620px] md:h-[612px] xl:h-[695px]
export default function Feed() {

    const { searchResult } = useAppContext();

    return (
        <div className='flex flex-row h-[calc(100vh-47px)] md:h-[calc(100vh-60px)] w-[98%] pt-5 md:gap-4 overflow-hidden'>
            <LeftNav />
            <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:basis-[85%] basis-full overflow-y-auto scrollbar-hide gap-4 gap-y-16 '>
                {searchResult?.map(item => {
                    return (
                        <VideoCard key={item?.video?.title} videoDetails={item} />
                    )
                })}
            </div>
        </div>
    )
}
