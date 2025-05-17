import React, { useState } from "react";
import "./InsideCard.css";
import Rating from "../../hooks/Rating";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const InsideCard = () => {
  const data = useSelector((state) => state.restaurants.cardPage);
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>Əvvələ qayıt</button>
      {data.map((item) => (
        <div key={item.id} className="container-block">
          <div className="card-image">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="card-inside">
            <h2 style={{fontSize:'28px'}}>{item.name}</h2>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
               <p className="cardin-cuisine">{item.cuisine}</p>
            <span className="card-rating">
              <Rating rating={item.rating} /> {item.rating}
            </span>
            </div>
            <p className="card-description">{item.description}</p>
            <p className="card-location"><span style={{color:"rgb(165, 163, 163)"}}>Ünvan:</span> {item.location}</p>
            <a className="contact-us" href="#">Bizimlə Əlaqə saxlayın</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsideCard;
