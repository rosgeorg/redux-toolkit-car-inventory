import carsReducer, { fetchCars, createCar, deleteCar } from "./carsSlice";

describe("carsSlice", () => {
  test("handles fetchCars.pending", () => {
    const initialState = {
      cars: [],
      loading: false,
      error: null,
    };

    const newState = carsReducer(initialState, fetchCars.pending());

    expect(newState.loading).toBe(true);
    expect(newState.error).toBe(null);
  });

  test("handles fetchCars.fulfilled", () => {
    const initialState = {
      cars: [],
      loading: true,
      error: null,
    };

    const cars = [{ id: 1, name: "Toyota Prius", cost: 1000 }];

    const newState = carsReducer(initialState, fetchCars.fulfilled(cars));

    expect(newState.loading).toBe(false);
    expect(newState.cars).toEqual(cars);
  });

  test("handles fetchCars.rejected", () => {
    const initialState = {
      cars: [],
      loading: true,
      error: null,
    };

    const action = {
      type: fetchCars.rejected.type,
      error: { message: "Failed to fetch cars" },
    };

    const newState = carsReducer(initialState, action);

    expect(newState.loading).toBe(false);
    expect(newState.error).toBe("Failed to fetch cars");
  });

  test("handles createCar.fulfilled", () => {
    const initialState = {
      cars: [],
      loading: false,
      error: null,
    };

    const car = { id: 1, name: "Toyota Prius", cost: 1000 };

    const newState = carsReducer(initialState, createCar.fulfilled(car));

    expect(newState.cars).toEqual([car]);
  });

  test("handles deleteCar.fulfilled", () => {
    const initialState = {
      cars: [
        { id: 1, name: "Toyota Prius", cost: 1000 },
        { id: 2, name: "Honda CRV", cost: 500 },
      ],
      loading: false,
      error: null,
    };

    const carToDelete = { id: 1, name: "Toyota Prius", cost: 1000 };

    const newState = carsReducer(
      initialState,
      deleteCar.fulfilled(carToDelete),
    );

    expect(newState.cars).toEqual([{ id: 2, name: "Honda CRV", cost: 500 }]);
  });
});
