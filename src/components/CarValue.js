import { useSelector } from "react-redux";
import { selectTotalCost } from "../features/cars/selectors";

function CarValue() {
  const totalCost = useSelector(selectTotalCost);
  /* Sum up the total cost of all cars */

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
