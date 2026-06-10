import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../utils/formatCurrency";
import { fetchCars, deleteCar } from "../features/cars/carsSlice";
import {
  selectFilteredCars,
  selectCarsError,
  selectCarsLoading,
} from "../features/cars/selectors";

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(selectFilteredCars);
  const isLoadingCars = useSelector(selectCarsLoading);
  const loadingCarsError = useSelector(selectCarsError);

  useEffect(() => {
    /* Load the list of cars from the API */
    dispatch(fetchCars());
  }, [dispatch]);

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
            {car.name} - {formatCurrency(car.cost)}
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
