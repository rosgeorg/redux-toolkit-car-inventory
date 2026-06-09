import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterTerm: "",
  },
  reducers: {
    changeFilterTerm(state, action) {
      state.filterTerm = action.payload;
    },
  },
});

export const { changeFilterTerm } = filterSlice.actions;
export default filterSlice.reducer;
