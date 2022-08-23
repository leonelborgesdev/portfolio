import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { BtnVideo } from "./components/Video/BtnVideo";
import { Contacto } from "./components/Contacto/Contacto";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Contacto />} />
        <Route exact path="/:id" element={<BtnVideo />} />
      </Routes>
    </div>
  );
}

export default App;
