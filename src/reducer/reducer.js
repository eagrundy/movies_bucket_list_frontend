import moviesReducer from './moviesReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    movies: moviesReducer,
})