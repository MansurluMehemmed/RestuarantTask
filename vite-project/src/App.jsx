
import "./index.css";
import { Route, Routes } from "react-router-dom";
import InsideCard from "./components/İnsideCard/InsideCard";
import RestaurantCard from "./components/RestuarantCard/RestuarantCard";


function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<RestaurantCard/>}/>
        <Route path="/cardPage/:id" element={<InsideCard />}/>
      </Routes>
    </div>
  );
}

export default App;
