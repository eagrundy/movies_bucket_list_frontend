import React from 'react'
import { Link } from 'react-router-dom'

const MovieContainer = (props) => {
  const {title, image_url, id} = props
  return (
    <div className="container">
      <p><Link to={`/movies/${id}`}>{title}</Link></p>
      {/* <h2><strong>{title}</strong></h2> */}
      <img src={image_url} alt={title}/><br/>
      {/* <p><strong>Description:</strong> {description}</p>
      <p><strong>Watch by:</strong> {deadline}</p> */}
    </div>
  )
}

export default MovieContainer
