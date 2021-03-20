import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAirFreshener,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <button className="btn btn-danger">
        <FontAwesomeIcon icon={faCoffee} />
        Danger
      </button>
      <br />
      <br />
      <button className="btn btn-secondary">
        <FontAwesomeIcon icon={faCheckSquare} />
        Danger
      </button>
    </div>
  );
}

export default App;
