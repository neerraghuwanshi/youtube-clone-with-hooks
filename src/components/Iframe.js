import React from 'react'

const Iframe = (props) => {
    
        const {title, src, description} = props
        return(
            <div>
            <iframe src={`https://youtube.com/embed/${src}`} title={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
        );
}
export default Iframe