// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieContainer from '../components/MovieContainer'

class MovieContainers extends Component {
    render(){
        return(
        <div className="containers">
            {this.props.movies.map(movie => <MovieContainer key={movie.id} {...movie} />)}
        </div>
        )
    }
    

}

const msp = (state) => {
    return {
    movies: state.movies.movies
    }
}

// const MovieContainers = (props) => {
    

export default connect(msp)(MovieContainers);