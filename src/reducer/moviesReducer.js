const nullMovie = {
  id: null,
  title: "",
  image_url: "",
  description: "",
  deadline: ""
}

const initialMovieState = {
  movies: [],
  selectedMovie: nullMovie,
  filtersForm: {
    search: ""
  }
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
      case "FILTERS_FORM_CHANGE":
      return {...state, filtersForm: {
        ...state.filtersForm,
        // if the payload's name is "content", this will update the
        // content key in the reviewForm in state with the new payload value
        [action.payload.name]: action.payload.value
      }}
        default:
        return state;
    }
  }
  
  export default moviesReducer;
  