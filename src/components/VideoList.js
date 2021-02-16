import React from 'react'
import VideoItem from './VideoItem'

import '../css/VideoList.css'


const VideoList = (props) =>{

    const {videos, rearrangeSelected} = props

    const videoList = videos.map((video, index) => (
        <VideoItem 
            video={video}
            key={video.snippet.title} 
            index={index}
            rearrangeSelected={rearrangeSelected}/> 
    ))
            
    return(
        <div className='videoList'>
            <ul>
                {videoList}
            </ul>
        </div>
    )

}
    

export default VideoList
