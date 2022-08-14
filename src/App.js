import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { FondoOscuro } from "./components/FondoOscuro/FondoOscuro";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<FondoOscuro />} />
      </Routes>
    </div>
  );
}

export default App;
