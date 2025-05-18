
import "./index.css";
import { Route, Routes } from "react-router-dom";
import InsideCard from "./components/İnsideCard/InsideCard";
import RestaurantCard from "./components/RestuarantCard/RestuarantCard";
import Menu from "./components/Menu";
import ContactUs from "./components/ContactUs";


function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<RestaurantCard/>}/>
        <Route path="/cardPage/:id" element={<InsideCard />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
      </Routes>
    </div>
  );
}

export default App;
