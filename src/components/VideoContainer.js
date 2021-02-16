import React from 'react'

import VideoList from './VideoList'
import Iframe from './Iframe'
import '../css/VideoContainer.css'


const VideoContainer = props => {
    
    const { 
        videos,
        selectedVideo, 
        rearrangeSelected,
    } = props;

    return(
        <div className='videoContainer'>
            <div className='centredvideoContainer'>
                <Iframe 
                    src={selectedVideo.id.videoId} 
                    title={selectedVideo.snippet.title} 
                    description={selectedVideo.snippet.description}/>
                <VideoList
                    videos={videos}
                    rearrangeSelected={rearrangeSelected} 
                    />
            </div>
        </div>
    );
}


export default React.memo(VideoContainer)