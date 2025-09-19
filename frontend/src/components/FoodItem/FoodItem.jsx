import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image, rating = 4 }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Generate stars (only full)
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };
                               
  return (
    <div className="food-item">
      {/* Image */}
      <div className="food-item-image-container">
        <img
          className="food-item-image"
          src={image || "https://via.placeholder.com/400x250"}
          alt={name}
        />

        {/* Floating Counter */}
        {!cartItems[id] ? (
          <button className="add-btn" onClick={() => addToCart(id, 1)}>+</button>
        ) : (
          <div className="product-counter">
            <button className="counter-btn" onClick={() => removeFromCart(id)}>-</button>
            <p>{cartItems[id]}</p>
            <button className="counter-btn" onClick={() => addToCart(id, 1)}>+</button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="food-item-info">
        {/* Name Center */}
        <p className="food-item-name">{name}</p>

        {/* Price + Rating Side by Side */}
        <div className="food-item-price-rating">
          <p className="food-item-price">₹{price}</p>
          <div className="food-item-rating">{renderStars(rating)}</div>
        </div>

        {/* Description */}
        <p className="food-item-desc">{description}</p>
      </div>

    </div>
  );
};

export default FoodItem;
