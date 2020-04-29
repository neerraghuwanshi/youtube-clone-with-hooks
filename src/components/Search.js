import React from 'react'
import { useSelector } from 'react-redux'

import '../css/videoContainer.css'
import VideoContainer from './VideoContainer'


const Search = () =>{

        const searchData = useSelector(state=>state.searchData);
        console.log(searchData)

        return(
            <VideoContainer query={searchData}/>    
        )
} 

export default Search