import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedMovie, unsetMovie } from '../actions/moviesActions'
import { deleteMovie } from '../actions/moviesActions'

class MovieShow extends Component {

    componentDidMount(){
        // get the id from the route (i.e. grab 1 from "/movies/1")
        // we give this.props.match.params a key of id when we define "/movies/:id" in our Route path in App.js
        const id = this.props.match.params.id
        this.props.setSelectedMovie(id)
    }

    // it doesn’t render its child components, which get unmounted.
    // component is being removed from the DOM
    componentWillUnmount(){
        this.props.unsetMovie()
      }

    render = () => {
        const { title, image_url, description, watch, id, history } = this.props
        return(
            // <>
            <div className="show">
                 <br /><br /><br /><br /><br /><br /><br />
            <h1>{ title }</h1>
            <p><img src={ image_url } alt={ title }/></p>
            <p><strong>Description:</strong> { description }</p>
            <p><strong>Watch by:</strong> { watch }</p>
            {/* <p><strong>Category:</strong> { category_attributes }</p> */}
            <button id="buttons" onClick={() => window.open( `https://www.google.com/search?q=${title}, where to watch`)} >Click Here</button> to see where to watch the movie {title}.<br /><br />
            <button id="buttons" onClick={() => window.open( `https://www.google.com/search?q=${title}, trailer`)} >Click Here</button> to see {title}'s trailer.<br /><br />
            <button id="buttons" onClick={ history.goBack }>Back to Main Page</button><br /><br />
            <button id="buttons" onClick={() => this.props.deleteMovie(id, this.props.history)}>Delete this movie</button>

            <br /><br />
            </div>
            // </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.movies.selectedMovie
})
export default connect( mapStateToProps, { setSelectedMovie, unsetMovie, deleteMovie } )(MovieShow)
//  we generate the component by passing the created functions msp and mdp to connect.