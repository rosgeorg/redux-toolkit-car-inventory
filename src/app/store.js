import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../features/cars/carsSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
  },
});
