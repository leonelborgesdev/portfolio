import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { BtnVideo } from "./components/Video/BtnVideo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<BtnVideo />} />
      </Routes>
    </div>
  );
}

export default App;
