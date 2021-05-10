import React from 'react'
// import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieContainer from '../components/MovieContainer'
import Filters from '../components/Filters'

const MovieContainers = (props) => {
    
    const searchedMovies = props.movies.filter(movie => {
        return movie.title.toLowerCase().includes(props.search.toLowerCase())
    })
        
    return(
        <>
        <Filters/>
        <div className="containers">
            {searchedMovies.map(movie => <MovieContainer key={movie.id} {...movie} />)}
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

// const MovieContainers = (props) => {
    

export default connect(msp)(MovieContainers);