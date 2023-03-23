import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./AppStarRating.css";

const AppStarRating = ({startRating,ratingTitle}) => {
  const [rating, setRating] = useState(startRating?startRating:0);
  const [hover, setHover] = useState(0);
  return (
    <div className="app">
    <div className="title">{ratingTitle}</div>
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
    </div>
  );
};

AppStarRating.propTypes = {
  startRating:PropTypes.number,
  ratingTitle:PropTypes.string
};

export default AppStarRating;