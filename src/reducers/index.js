import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const initialState = {searchData:localStorage.getItem('searchTerm'), error:{}}

export const SEARCHDATA = "SEARCHDATA"
export const ERROR = "ERROR"

export const reducer = (state, action) => {
    switch(action.type){
        case SEARCHDATA:
            return{
                ...state,
                searchData: action.searchData
            };
        case ERROR:
            return {
                ...state,
                error:action.error
            };
        default:
            return{
                state
            }
    }
}

export const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(thunk)))