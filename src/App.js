// import { Component } from 'react';
import './App.css';
import MovieContainers from './containers/MovieContainers'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMovies } from './actions/moviesActions'


class App extends Component {

  componentDidMount(){
    this.props.setMovies()
  }

  render(){
    return (
      <>
      <h1>Movies Bucket List</h1>
      <MovieContainers/>
      </>
    );
  }
}

export default connect(null, { setMovies })(App);
