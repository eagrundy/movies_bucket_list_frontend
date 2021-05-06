import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedMovie, unsetMovie } from '../actions/moviesActions'

class MovieShow extends Component {

    componentDidMount(){
        // get the id from the route (i.e. grab 1 from "/restaurants/1")
        // we give this.props.match.params a key of id when we define "/restaurants/:id" in our Route path in App.js
        const id = this.props.match.params.id
        this.props.setSelectedMovie(id)
    }

    componentWillUnmount(){
        this.props.unsetMovie()
      }

    render = () => {
        const { title, image_url, description, deadline, history } = this.props
        return(
            // <>
            <div className="show">
            <button onClick={ history.goBack }>Go back</button>
            <h1>{ title }</h1>
            <p><img src={ image_url } alt={ title }/></p>
            <p><strong>Description:</strong> { description }</p>
            <p><strong>Watch by:</strong> { deadline }</p>
            </div>
            // </>
        )   
    }
}

const mapStateToProps = (state) => ({
    ...state.movies.selectedMovie
})
export default connect( mapStateToProps, { setSelectedMovie, unsetMovie } )(MovieShow)