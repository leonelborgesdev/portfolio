import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { BtnVideo } from "./components/Video/BtnVideo";
import { DarkMode } from "./components/DarkMode/DarkMode";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DarkMode />} />
        <Route exact path="/:id" element={<BtnVideo />} />
      </Routes>
    </div>
  );
}

export default App;
