import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio/Portfolio";
import ButonPdf from "./components/ButonPdf/ButonPdf";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
