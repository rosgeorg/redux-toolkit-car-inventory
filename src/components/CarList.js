import { useEffect } from "react";

function CarList() {
  /* Temporary values to allow the application to load. These should be replaced. */
  let isLoadingCars = false;
  let loadingCarsError = false;
  let cars = [];

  useEffect(() => {
    /* Load the list of cars from the API */
  }, []);

  /* Implement the delete functionality here */
  const handleCarDelete = (car) => {};

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
