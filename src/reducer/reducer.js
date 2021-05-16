import moviesReducer from './moviesReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    movies: moviesReducer,
})


// With Redux, there is just one store, 
// but combineReducers helps you keep the 
// same logical division between reducers.
// it helps you organize your reducers to 
// manage their own slices of state

