import {selectTitleFilter, selectAuthorFilter, resetFilters, setTitleFilter, setAuthorFilter} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import './Filter.css'

const Filter = () => {

    const dispatch = useDispatch()
   const titleFilter =  useSelector(selectTitleFilter)
     const authorFilter =  useSelector(selectAuthorFilter)

    const handleTitleFilterChange = (e) => {
  dispatch(setTitleFilter(e.target.value))
    }
    const handleResetFilters = () => {
        dispatch(resetFilters())
    }
      const handleAuthorFilterChange = (e) => {
  dispatch(setAuthorFilter(e.target.value))
    }

  return (
    <div className="app-block filter">
        <div className="filter-row">
            <div className="filter-group">
                <input type="text" value={titleFilter} onChange={handleTitleFilterChange}
                       placeholder="Filter by title..."/>
            </div>
            <button type="button" onClick={handleResetFilters}>Reset filters</button>

            <div className="filter-group">
                <input type="text" value={authorFilter} onChange={handleAuthorFilterChange}
                       placeholder="Filter by author..."/>
            </div>
        </div>
    </div>
  );
};

export default Filter;