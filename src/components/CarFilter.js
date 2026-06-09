import { useDispatch, useSelector } from "react-redux";
import { changeFilterTerm } from "../features/filter/filterSlice";
import { selectFilterTerm } from "../features/filter/selectors";

function CarFilter() {
  const dispatch = useDispatch();
  const filterTerm = useSelector(selectFilterTerm);

  /* Implement the filter change in this function */
  const handleFilterChange = (event) => {
    dispatch(changeFilterTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="filter field is-horizontal">
        <label className="label" htmlFor="filter-term">
          Filter
        </label>
        <input
          id="filter-term"
          className="input"
          value={filterTerm}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default CarFilter;
