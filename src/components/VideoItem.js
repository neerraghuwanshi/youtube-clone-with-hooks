import React from 'react';


const VideoItem = (props) => {
        const {alt, src, item, onClickHandler} = props
        return(
            <img onClick={()=>onClickHandler(item)} src={src} alt={alt} />
        );
}
export default VideoItem