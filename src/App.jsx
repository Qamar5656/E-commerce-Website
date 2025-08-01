import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailspage from "./Components/Grocery Items/Detailspage";
import Homepage from "./Components/Pages/Homepage";

function App() {
  return (
    <>
      {/* Wrap your routed components inside BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details" element={<Detailspage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
