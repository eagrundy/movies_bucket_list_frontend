import { connect } from 'react-redux'
import { handleSearchFormChange } from '../actions/moviesActions'

const Filters = (props) => {
    return (
        <form>
            <br /><br /><br /><br /><br /><br /><br />
        <label>
          Search: <br /> 
          <input type="text" name="search" value={props.search} onChange={props.handleSearchFormChange} placeholder='Type to search...'/>
        </label>
        {/* <input type="submit" value="Submit" /> */}
        </form>
    )
}

const msp = (state) => ({
    ...state.movies.filtersForm
})

export default connect(msp, { handleSearchFormChange })(Filters)