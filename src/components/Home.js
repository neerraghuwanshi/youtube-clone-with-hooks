import React, { useState, useCallback } from 'react';
import axios from 'axios'

import VideoContainer from './VideoContainer';
import Navbar from './Navbar';
import Loader from './Loader';
import Centre from './Centre';


const Home = () => {

    const [search, setSearch] = useState('')
    const [error, setError] = useState(false)
    const [videos, setVideos] = useState(null)
    const [loading, setLoading] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState(null)

    const rearrangeSelected = (video) => {
        setVideos(videos=>videos.filter(item => item !== video))
        setVideos(videos=>videos.concat(selectedVideo))
        setSelectedVideo(video)
    }


    const fetchVideos = useCallback((event) => {
        if(event){
            event.preventDefault()
        }
        setLoading(true)
        setError(false)
        setVideos(null)
        setSelectedVideo(null)
        axios.get(
            'https://www.googleapis.com//youtube/v3/search',{
            params: {
                part: 'snippet',
                maxResults: 6,
                key: 'AIzaSyA4wCw5Q05z3wU6YOepmF7kExJFO_rVlo8',
                q: search
            }
        }).then(response=>{
            setVideos(response.data.items.filter((item, index)=>index !== 0));
            setSelectedVideo(response.data.items[0]);
            setLoading(false)
        }).catch(()=>{
            setError(true)
            setLoading(false)
        })
    },[search])

    return(
        <>
            <Navbar 
                search={search} 
                setSearch={setSearch}
                fetchVideos={fetchVideos}/>
            {videos && selectedVideo &&
            <VideoContainer 
                videos={videos}
                setVideos={setVideos}
                selectedVideo={selectedVideo}
                rearrangeSelected={rearrangeSelected}/>}
            {!videos && !selectedVideo &&
            <>
            {error ?
            <Centre 
                text='Something Went Wrong'/> :
            !loading ? 
            <Centre 
                text='Search To Watch'/> :
            <Loader />}
            </>}
        </>
    );
}

export default React.memo(Home)