import { Link } from "react-router-dom";
import Rating from "../Rating";
import "./RestuarantCard.css";
import { useDispatch, useSelector } from "react-redux";
import { clickRestaurant } from "../../state/RestuarantSlice";
const RestaurantCard = () => {
  const restuarants = useSelector((state) => state.restaurants.restaurants);
  const dispatch = useDispatch()
  return (
    <div className="card-page mt-[30px]">
      <h1 className="title text-[32px]"> Restoranlar</h1>
      <div className="card-grid">
        {restuarants.map((restuarant) => (
          <div key={restuarant.id} className="card">
            <img
              src={restuarant.imageUrl}
              alt={restuarant.name}
              className="card-img"
            />
            <div className="card-content">
              <Link to={`/cardPage/${restuarant.id}`}  onClick={()=>{dispatch(clickRestaurant(restuarant.id))}} className="card-title">
                {restuarant.name}
              </Link>
              <p className="card-cuisine">{restuarant.cuisine}</p>
              <span className="card-rating">
                <Rating rating={restuarant.rating} /> {restuarant.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
