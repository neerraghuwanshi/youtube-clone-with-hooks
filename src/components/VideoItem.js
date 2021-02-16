import React from 'react';

import '../css/VideoItem.css'


const VideoItem = (props) => {

    const { video, rearrangeSelected } = props;

    const title = video.snippet.title
    const slicedTitle = title.slice(0, 35)

    return (
        <div className='itemContainer'>
            <img 
                onClick={()=>rearrangeSelected(video)} 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title} />
            <h4>
                {`${slicedTitle} ${slicedTitle.length !== title.length ? '...' : ''}`}</h4> 
        </div>
    );
}


export default VideoItem