import { useSelector } from "react-redux";
import { selectTotalCost } from "../features/cars/selectors";

function CarValue() {
  /* Sum up the total cost of all cars */
  const totalCost = useSelector(selectTotalCost);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
