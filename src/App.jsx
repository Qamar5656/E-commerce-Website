import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailspage from "./Components/Garments Items/Detailspage";
import Homepage from "./Components/Pages/Homepage";
import CartPage from "./Components/Store/CartPage";

function App() {
  return (
    <>
      {/* Wrap your routed components inside BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details" element={<Detailspage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
