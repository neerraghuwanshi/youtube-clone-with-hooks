import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {SearchData} from '../reducers/actions'


const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('')

    const dispatch = useDispatch()

    const onSubmitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('searchTerm',searchTerm)
        dispatch(SearchData(searchTerm))
        props.history.push('/search')
        }

        return(
            <form onSubmit={onSubmitHandler}>
                <input onChange={event=>setSearchTerm(event.target.value)} value={searchTerm} placeholder="Search"/>
                <div onClick={onSubmitHandler}>
                    <i className="fa fa-search" aria-hidden="true" />
                </div>
            </form>
        );
}
export default withRouter(SearchBar)