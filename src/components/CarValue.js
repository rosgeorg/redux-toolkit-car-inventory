import { useSelector } from "react-redux";
import { selectTotalCost } from "../features/cars/selectors";
import { formatCurrency } from "../utils/formatCurrency";

function CarValue() {
  const totalCost = useSelector(selectTotalCost);

  return (
    <div className="car-value">Total Cost: {formatCurrency(totalCost)}</div>
  );
}

export default CarValue;
