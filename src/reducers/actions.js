import {SEARCHDATA, ERROR} from '../reducers'

export const SearchData = (searchData) => {
    return{
        type: SEARCHDATA,
        searchData: searchData
    }
}

export const Error = (error) => {
    return{
        type: ERROR,
        error: error
    }
}