import React from 'react'
// import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieContainer from '../components/MovieContainer'
import Filters from '../components/Filters'
import DarkMode from '../components/DarkMode'
import NumberButton from '../components/NumberButton'

const MovieContainers = (props) => {
    
    const searchedMovies = props.movies.filter(movie => {
        return movie.title.toLowerCase().includes(props.search.toLowerCase())
    })

    const sortedMovies = () => {
        return props.alphabetical ? searchedMovies.sort((a, b) => a.title.localeCompare(b.title)) : searchedMovies
      }
        
    return(
        <>
        <br /><br /><br /><br /><br /><br />
        <DarkMode/><br />
        <NumberButton/>
        <Filters/><br />
        <div className="containers">
            {sortedMovies().map(movie => <MovieContainer key={movie.id} {...movie} />)}
        </div>
        </>
    )
    
    

}

const msp = (state) => {
    return {
    movies: state.movies.movies,
    ...state.movies.filtersForm
    }
}


    
// connect() is a function that injects Redux-related props into your component.
// You can inject data and callbacks that change that data by dispatching actions.
export default connect(msp)(MovieContainers);