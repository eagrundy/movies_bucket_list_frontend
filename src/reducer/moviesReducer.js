const nullMovie = {
  id: null,
  title: "",
  image_url: "",
  description: "",
  deadline: ""
}

const initialMovieState = {
    movies: [],
    selectedMovie: nullMovie
  }
  
  const moviesReducer = (state=initialMovieState, action) => {
    // debugger;
    switch (action.type){
      case "SET_MOVIES":
        return {...state, movies: action.payload}
      case "SET_SELECTED_MOVIE":
        return {...state, selectedMovie: action.payload}
      case "UNSET_MOVIE":
        return {...state, selectedMovie: nullMovie}
      case "ADD_MOVIE":
        // return [...state, action.payload]
        return {...state, movies: [...state.movies, action.movie]}
      case "DELETE_MOVIE":
        return {...state, movies: state.movies.filter(movie => action.movie.id !== movie.id)} 
        default:
        return state;
    }
  }
  
  export default moviesReducer;
  