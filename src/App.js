import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { BtnVideo } from "./components/Video/BtnVideo";
import { Home } from "./components/Home/Home";
import { useSelector } from "react-redux";

function App() {
  const { language } = useSelector((state) => state);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<BtnVideo />} />
      </Routes>
    </div>
  );
}

export default App;
