// import { Component } from 'react';
import './App.css';
import MovieContainers from './containers/MovieContainers'
import MovieShow from './components/MovieShow'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMovies } from './actions/moviesActions'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar';
import Home from './components/header/Home';
import About from './components/header/About';


class App extends Component {

  componentDidMount(){
    this.props.setMovies()
  }

  render(){
    return (
      <>
      <h1>Movies Bucket List</h1>
      <div className="sticky">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route path="/movies/:id" component={MovieShow}/>
        <Route path="/movies" component={MovieContainers}/>
      </Switch>
      </>
    );
  }
}

export default connect(null, { setMovies })(App);
