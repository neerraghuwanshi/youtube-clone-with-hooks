import React, {useState, useEffect, useCallback} from 'react'
import VideoList from './VideoList'
import Iframe from './Iframe'
import {useDispatch} from 'react-redux'
import {Error} from '../reducers/actions'

import axios from 'axios';

const VideoContainer = React.memo((props) => {
    
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState([])
    const [shouldRender, setShouldRender] = useState(false)
    const {query} = props;

    const dispatch = useDispatch()

    const fetchVideos = useCallback(async(searchTerm) => {
        await axios.get('https://www.googleapis.com//youtube/v3/search',{
                params: {
                    part:'snippet',
                    maxResults:5,
                    key:'AIzaSyB5-qFTlsVZBy9d-phTMiCtu2OM-hMSmO4',
                    q:searchTerm
                }}).then(response=>{
                    setVideos(response.data);
                    setSelectedVideo(response.data.items[0]);
                    setShouldRender(true);
                }).catch(error=>{dispatch(Error(error))
                console.log('fuck')})
},[dispatch])


    useEffect(() => {
       fetchVideos(query)
    },[query, fetchVideos])
        
    const onClickHandler = (item) => {
        setSelectedVideo(item)
    }

        if(shouldRender){
        return(
            <div>
            <div className={'container'}> 
                    <Iframe src={selectedVideo.id.videoId} title={selectedVideo.snippet.title} description={selectedVideo.snippet.description}/>
                    <VideoList onClickHandler={onClickHandler} items={videos.items}/>
                </div>
            </div>);
        }
        return null
})

export default VideoContainer
