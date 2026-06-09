import { createSelector } from "@reduxjs/toolkit";

const selectCars = (state) => state.cars.cars;
const selectFilterTerm = (state) => state.filter.filterTerm;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilterTerm],
  (cars, filterTerm) => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(filterTerm.toLowerCase()),
    );
  },
);

export const selectCarsLoading = (state) => state.cars.loading;
export const selectCarsError = (state) => state.cars.error;
