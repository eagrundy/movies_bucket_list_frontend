const API = "http://localhost:3000"

export const setMovies = () => {
    return dispatch => {
        fetch(API + "/movies")
        .then(res => res.json())
        .then(movies => dispatch({
            type: "SET_MOVIES",
            payload: movies
        })
    )}
}

export const setSelectedMovie = (id) => {
    return dispatch => {
        fetch(API + "/movies/" + id)
        .then(res => res.json())
        .then(movie => dispatch({
            type: "SET_SELECTED_MOVIE",
            payload: movie
        })
    )}
}

export const unsetMovie = () => ({type: "UNSET_MOVIE"})