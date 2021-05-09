import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMovie } from '../actions/moviesActions'
import { setMovies } from '../actions/moviesActions'



class MovieForm extends Component {
    state= {
        title: " ",
        image_url: " ",
        category_attributes: " ",
        description: " ",
        watch: " "
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("a")
        this.props.addMovie(this.state, this.props.history);
        console.log("b")

    }


    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               <h3>Add A New Movie</h3>
               <form onSubmit= { this.handleSubmit }>
                   <div className="container">
                       <label>Title: </label>
                       <br />
                       <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange }/>
                       <br /><br />
                       <label>Image: </label>
                       <br />
                       <input type="text" id="image" name="image_url" value={ this.state.image_url } onChange={ this.handleChange }/>
                       <br /><br />
                       <label>Category: </label>
                       <br />
                       {/* <select>
                           <option value={ this.state.category_attributes} onChange={ this.handleChange}>Drama</option>
                           <option value={ this.state.category_attributes} onChange={ this.handleChange}>Comedy</option>
                           <option value={ this.state.category_attributes} onChange={ this.handleChange }>Mistery</option>
                           <option value={ this.state.category_attributes} onChange={ this.handleChange }>Fiction</option>
                           <option value={ this.state.category_attributes} onChange={ this.handleChange }>Thriller</option>
                           <option value={ this.state.category_attributes} onChange={ this.handleChange }>Action</option>
                           <option value={ this.state.category_attributes} onChange={ this.handleChange }>Romance</option>
                       </select> */}
                       <input type="text" id="category_attributes" name="category_attributes" value={ this.state.category_attributes } onChange={ this.handleChange }/>
                       <br /><br />
                       <label>Watch it by: </label>
                       <br />
                       <input type="text" id="watch" name="watch" value={ this.state.watch } onChange={ this.handleChange }/>
                       <br /><br />
                       <label>Description: </label>
                       <br />
                       <textarea id="description" name="description" value={ this.state.description } onChange={ this.handleChange }></textarea>
                       <br /><br />
                   </div>
                   <input type="submit" name="Add Movie" />
               </form>
               <br></br>
               <br></br>
               <br></br>
            </div>
        )
    }
}

export default connect(null, { addMovie, setMovies })(MovieForm)