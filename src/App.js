import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { BtnVideo } from "./components/Video/BtnVideo";
import { SoftSkills } from "./components/SoftSkills/SoftSkills";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SoftSkills />} />
        <Route exact path="/:id" element={<BtnVideo />} />
      </Routes>
    </div>
  );
}

export default App;
