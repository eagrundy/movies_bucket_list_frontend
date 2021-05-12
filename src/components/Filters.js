import { connect } from 'react-redux'
import { handleSearchFormChange } from '../actions/moviesActions'

const Filters = (props) => {
    return (
        <form>
            <br />
        <label>
          Search: <br /> 
          <input type="text" name="search" value={props.search} onChange={props.handleSearchFormChange} placeholder='Type to search by title...'/>
        </label><br /><br />  
        <label className="box">
            Click to Sort A-Z: <br /> 
          <input
            name="alphabetical"
            type="checkbox"
            checked={props.alphabetical}
            onChange={props.handleSearchFormChange} />
        </label><br/>
        </form>
    )
}

const msp = (state) => ({
    ...state.movies.filtersForm
})

export default connect(msp, { handleSearchFormChange })(Filters)