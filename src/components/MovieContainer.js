import { Component } from 'react';
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
// import { deleteMovie } from '../actions/moviesActions'

class MovieContainer extends Component {

  // handleOnClick() {
  //     //debugger;
  //     this.props.deleteMovie(this.props.id)
  // }


// const MovieContainer = (props) => {
  render() {
    const {title, image_url, id} = this.props;
   return (
    <div className="container">
      <br /><br /><br /><br /><br /><br />
      <h2><Link to={`/movies/${id}`}>{title}</Link></h2>
      <img src={image_url} alt={title}/><br/><br/>
      {/* <button onClick={() => this.props.deleteMovie(id, this.props.history)}>Delete this movie</button> */}
    </div>
  )
  }
}
// history is prop provided by react router

// export default connect(null, {deleteMovie})(MovieContainer)
export default MovieContainer
