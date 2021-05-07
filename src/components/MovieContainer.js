import React from 'react'
import { Link } from 'react-router-dom'

const MovieContainer = (props) => {
  const {title, image_url, id} = props
  return (
    <div className="container">
      <br /><br /><br /><br /><br />
      <h2><Link to={`/movies/${id}`}>{title}</Link></h2>
      {/* <h2><strong>{title}</strong></h2> */}
      <img src={image_url} alt={title}/><br/>
      {/* <p><strong>Description:</strong> {description}</p>
      <p><strong>Watch by:</strong> {deadline}</p> */}
    </div>
  )
}

export default MovieContainer
