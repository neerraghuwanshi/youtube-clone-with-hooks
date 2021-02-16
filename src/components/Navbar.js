import React, { useState } from 'react';
import '../css/Navbar.css';


const Navbar = (props) => {

    const { search, setSearch, fetchVideos } = props
    const [blackBorder, setBlackBorder] = useState(false)

    return (
        <div className="maindiv">
            <form onSubmit={(event)=>fetchVideos(event)}>
                <input 
                    value={search} 
                    placeholder="Search..."
                    onChange={event=>{
                        setSearch(event.target.value)
                    }} 
                    style={{
                        borderRightColor: blackBorder ? 
                                            'black': 
                                            'grey'
                    }}/>
            </form>
            <div 
                onClick={(event)=>fetchVideos(event)} 
                onMouseEnter={()=>setBlackBorder(true)}
                onMouseLeave={()=>setBlackBorder(false)}
                className="iconContainer">
                <i 
                    className="fa fa-search" 
                    aria-hidden="true"/>
            </div>
        </div>
    )
}


export default Navbar