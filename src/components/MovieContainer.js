import React from 'react'

const MovieContainer = (props) => {
  const {title, image_url, description, deadline} = props
  return (
    <div className="container">
      <h2><strong>{title}</strong></h2>
      <img src={image_url} alt={title}/><br/>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Watch by:</strong> {deadline}</p>
    </div>
  )
}

export default MovieContainer
