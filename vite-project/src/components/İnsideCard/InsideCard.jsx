import React, { useState } from "react";
import "./InsideCard.css";
import Rating from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { menuItemsSection } from "../../state/RestuarantSlice";
const InsideCard = () => {
  const data = useSelector((state) => state.restaurants.cardPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="block mb-[100px]">
       <div className="flex w-[80%] justify-start ">
        <button
            onClick={() => navigate('/')}
            className="w-[100px] h-[40px] mt-[5px] mb-[15px] bg-[#ffb347] cursor-pointer border border-white rounded"
          >
            Əvvələ qayıt
          </button>
       </div>
      {data.map((item) => (
        <div key={item.id} className="container-flex">
         
          <div className="container-block">
            <div className="card-image h-[80vh] max-sm:h-[40vh] sm:h-[50vh] md:h-[60vh] ">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="card-inside">
              <h2 className="text-[28px] max-sm:text-[20px] mb-2">
                {item.name}
              </h2>
              <div className="flex justify-between items-center mb-5">
                <p className=" text-[16px] text-[#ffb347] max-sm:text-[12px]">
                  {item.cuisine}
                </p>
                <Link to="review" smooth={true} className="card-rating">
                  <Rating rating={item.rating} /> {item.rating}
                </Link>
              </div>
              <p className="card-description text-[17px] max-sm:text-[14px] mb-5">
                {item.description}
              </p>
              <p className="card-location">
                <span style={{ color: "rgb(165, 163, 163)" }}>Ünvan:</span>{" "}
                {item.location}
              </p>
              <div className="flex gap-5 items-center mt-10  ">
                <NavLink
                  to="/menu"
                  className="w-full h-[40px] hover:shadow-md hover:-translate-y-0.5 shadow-amber-400 text-white flex items-center justify-center border border-amber-200"
                  onClick={() => dispatch(menuItemsSection())}
                >
                  Menu baxın
                </NavLink>
                <NavLink to='/contact-us'
                  className="contact-us hover:-translate-y-0.5 hover:shadow-md shadow-gray-500"
                 
                >
                  Bizimlə Əlaqə 
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex mt-10 w-full">
            <div id="reviews" className={`flex flex-col w-full gap-5 `}>
              <h2 id="review" className="text-2xl">
                Yemək rəyləri və reytinqləri:
              </h2>
              <ul className="w-full flex flex-col p-0 m-0 shadow gap-2">
                {item.reviews.map((review) => (
                  <li
                    key={Math.random()}
                    className="shadow px-4 py-4 rounded-md bg-neutral-900"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-4 items-center">
                      {/* Avatar */}
                      <div className="flex gap-[10px] justify-start">
                        <span className="bg-blue-300 text-white font-semibold text-xl sm:text-2xl w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] flex items-center justify-center rounded-full">
                          {review.user[0]}
                        </span>

                        {/* User info and comment */}
                        <div className="flex flex-col">
                          <h2 className="text-white text-[18px] sm:text-[20px] font-semibold">
                            {review.user}
                          </h2>
                          <p className="text-gray-400 text-sm sm:text-base">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                      {/* Rating */}
                      <div className="flex justify-end">
                        <span className="text-yellow-400 text-sm sm:text-base flex items-center">
                          <Rating rating={review.rating} />
                          <span className="ml-1 text-white">
                            {review.rating}
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsideCard;
