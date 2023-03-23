import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';
import './index.css';
import AppStarRating from './AppStarRating';


const Index = ({ rating,title }) => (
  <div id="star-rating-component">
    <AppStarRating startRating={rating} ratingTitle={title}/>
  </div>
);

Index.propTypes = {
  rating:PropTypes.number,
  title:PropTypes.string
};

customElements.define('star-rating-component', reactToWebComponent(Index, React, ReactDOM));