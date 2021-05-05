import React from 'react'
import { connect } from 'react-redux'
import MovieContainer from '../components/MovieContainer'

const MovieContainers = (props) => {
    return(
    <div className="containers">
        {props.movies.map(movie => <MovieContainer key={movie.id} {...movie} />)}
    </div>)
}

const msp = (state) => ({
    movies: state.movies.movies
})

export default connect(msp)(MovieContainers)