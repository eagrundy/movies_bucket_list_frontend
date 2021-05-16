// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.
// We send them to the store using dispatch

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

// a, c, b, d
export const addMovie = (movie, history) => {
    return dispatch => {
        console.log("c")
        fetch('http://localhost:3000/movies', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            body: JSON.stringify({ movie })
        })
        .then(res=> res.json())
        .then(movie => {
            console.log("d")
            dispatch({ type: "ADD_MOVIE", movie })
            history.push("/movies")
        })
    }
}

export const deleteMovie = ( id, history ) => {
    return dispatch => {

        fetch(`http://localhost:3000/movies/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        
        })
        .then(resp => resp.json())
        .then(movie => {
            dispatch({ type: "DELETE_MOVIE", movie })
            history.push("/movies")
        })
    }
}

export const handleSearchFormChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    return ({
      type: "FILTERS_FORM_CHANGE",
      payload: {name: e.target.name, value: value}
    })
  }

//   no payload because no data is passed around to reducers
export const unsetMovie = () => ({type: "UNSET_MOVIE"})