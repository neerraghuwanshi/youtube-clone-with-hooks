import React from 'react'

import '../css/Iframe.css'

const Iframe = (props) => {
    
        const { title, src } = props

        return(
            <div className='iframeContainer'>
                <iframe 
                    src={`https://youtube.com/embed/${src}`} 
                    title={title}/>
                <h1 className='videoTitle'>
                    {title}    
                </h1>
                <hr id='iframHr'/>
            </div>
        );
}


export default Iframe