import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await fetch("http://localhost:3005/cars");

  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }

  return response.json();
});

export const createCar = createAsyncThunk("cars/createCar", async (car) => {
  const response = await fetch("http://localhost:3005/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });

  if (!response.ok) {
    throw new Error("Failed to create car");
  }

  return response.json();
});

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
      });
  },
});

export default carsSlice.reducer;
