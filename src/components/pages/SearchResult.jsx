import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getApiData from '../../util/api';
import SearchResultCard from '../cards/SearchResultCard';
import { useAppContext } from "../../util/AppContext"

export default function SearchResult() {

    const [searchResult, SetsearchResult] = useState();
    const { searchQuery } = useParams();
    const { Setloading } = useAppContext()

    useEffect(() => {
        fetchSearchData();
    }, [searchQuery])

    const fetchSearchData = async () => {
        Setloading(val => !val)
        getApiData(`search/?q=${searchQuery}`).then(res => {
            SetsearchResult(res?.data?.contents)
            Setloading(val => !val)
        })

    }

    return (
        <div className='scrollbar-hide w-[75%] mx-auto flex flex-col gap-2'>
            {searchResult?.map(item => {

                return (
                    <SearchResultCard key={item?.video?.videoId} videoDetails={item} />
                )
            })}
        </div>
    )
}
