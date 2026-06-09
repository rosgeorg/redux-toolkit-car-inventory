import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarFilter from "./components/CarFilter";
import CarValue from "./components/CarValue";

function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarFilter />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
