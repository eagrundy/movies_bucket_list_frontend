import { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieContainer extends Component {

  render() {
    const {title, image_url, id} = this.props;
   return (
    <div className="container">
      <h2><Link to={`/movies/${id}`}>{title}</Link></h2>
      <img src={image_url} alt={title}/><br/><br/>
    </div>
  )
  }
}
// history is prop provided by react router

// export default connect(null, {deleteMovie})(MovieContainer)
export default MovieContainer
