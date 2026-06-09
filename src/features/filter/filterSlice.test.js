import filterReducer, { changeFilterTerm } from "./filterSlice";

test("updates the filter term", () => {
  const initialState = { filterTerm: "" };

  const newState = filterReducer(initialState, changeFilterTerm("toyota"));

  expect(newState.filterTerm).toBe("toyota");
});
