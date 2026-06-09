function CarFilter() {
  /* Implement the filter change in this function */
  const handleFilterChange = (event) => {};

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="filter field is-horizontal">
        <label className="label">Filter</label>
        <input
          className="input"
          /* value={filterTerm} */
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default CarFilter;
