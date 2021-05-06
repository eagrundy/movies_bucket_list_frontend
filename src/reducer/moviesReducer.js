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
    switch (action.type){
      case "SET_MOVIES":
        return {...state, movies: action.payload}
      case "SET_SELECTED_MOVIE":
        return {...state, selectedMovie: action.payload}
      case "UNSET_MOVIE":
        return {...state, selectedMovie: nullMovie}
      default:
        return {...state}
    }
  }
  
  export default moviesReducer
  