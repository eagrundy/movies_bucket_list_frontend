import React from 'react'
import './App.css';
import MovieContainers from './containers/MovieContainers'
import MovieShow from './components/MovieShow'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setMovies } from './actions/moviesActions';
// import { addMovie } from './actions/moviesActions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/Footer';
import Navbar from './components/header/Navbar';
import Home from './components/header/Home';
import About from './components/header/About';
import Contact from './components/header/Contact';
import MovieForm from './components/MovieForm';


class App extends Component {

  componentDidMount(){
    this.props.setMovies()
  }

  render(){
    return (
      <>
      <Router>
        <div className="sticky">
        <Header />
        <Navbar />
        </div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component= { About } />
        <Route exact path="/movies" component={ MovieContainers }/>
        <Route exact path="/movies/new" component={ MovieForm} />
        <Route exact path="/movies/:id" component={MovieShow}/>
        <Route exact path="/contact" component= { Contact } />
      </Switch>
      <Footer />
      </Router>
      </>
    );
  }
}

export default connect(null, { setMovies })(App);
