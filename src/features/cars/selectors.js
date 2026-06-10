import { createSelector } from "@reduxjs/toolkit";
import { selectFilterTerm } from "../filter/selectors";

export const selectCars = (state) => state.cars.cars;
export const selectCarsLoading = (state) => state.cars.loading;
export const selectCarsError = (state) => state.cars.error;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilterTerm],
  (cars, filterTerm) => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(filterTerm.toLowerCase()),
    );
  },
);

export const selectTotalCost = createSelector([selectFilteredCars], (cars) => {
  return cars.reduce((total, car) => total + car.cost, 0);
});
