import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import CarDetails from "./pages/CarDetails";
import SellYourCar from "./pages/SellYourCar";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/sell" element={<SellYourCar />} />
        <Route path="*" element={<main className="container page-content"><h1>Page not found</h1></main>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;