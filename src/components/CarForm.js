import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCar } from "../features/cars/carsSlice";

function CarForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCostChange = (event) => {
    setCost(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      createCar({
        name,
        cost: Number(cost),
      }),
    );

    setName("");
    setCost("");
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="cost">
              Cost
            </label>
            <input
              id="cost"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link" disabled={!name.trim() || !cost}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
