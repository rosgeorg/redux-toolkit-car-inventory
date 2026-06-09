import { selectFilteredCars, selectTotalCost } from "./selectors";

const state = {
  cars: {
    cars: [
      { id: 1, name: "Toyota Prius", cost: 1000 },
      { id: 2, name: "Honda CRV", cost: 500 },
      { id: 3, name: "Ford F150", cost: 1500 },
    ],
    loading: false,
    error: null,
  },
  filter: {
    filterTerm: "toyo",
  },
};

test("selectFilteredCars returns cars matching the filter term", () => {
  expect(selectFilteredCars(state)).toEqual([
    { id: 1, name: "Toyota Prius", cost: 1000 },
  ]);
});

test("selectTotalCost returns the total cost of filtered cars", () => {
  expect(selectTotalCost(state)).toBe(1000);
});
