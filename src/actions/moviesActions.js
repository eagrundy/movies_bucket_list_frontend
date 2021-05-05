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