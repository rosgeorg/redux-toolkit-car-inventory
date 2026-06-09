import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, deleteCar } from "../features/cars/carsSlice";

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.cars);
  const isLoadingCars = useSelector((state) => state.cars.loading);
  const loadingCarsError = useSelector((state) => state.cars.error);

  useEffect(() => {
    /* Load the list of cars from the API */
    dispatch(fetchCars());
  }, [dispatch]);

  /* Implement the delete functionality here */
  const handleCarDelete = (car) => {
    dispatch(deleteCar(car));
  };

  let content;
  if (isLoadingCars) {
    content = <div>Loading...</div>;
  } else if (loadingCarsError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = cars.map((car) => {
      return (
        <div key={car.id} className="panel">
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            className="button is-danger"
            onClick={() => handleCarDelete(car)}
          >
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <div className="car-list">
      {content}
      <hr />
    </div>
  );
}

export default CarList;
