function CarForm() {
  /* Implement the name, cost, and submit changes in these functions */
  const handleNameChange = (event) => {};
  const handleCostChange = (event) => {};
  const handleSubmit = (event) => {};

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              id="label"
              className="input is-expanded"
              /* value={name} */
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              /* value={cost || ""} */
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
