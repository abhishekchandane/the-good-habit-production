import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => { 
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

return (
  <div className="product-card">
    {/* Image with counter floating */}
    <div className="product-image">
      <img
        src={image || "https://via.placeholder.com/400x250"}
        alt={name}
      />

      {/* Counter inside image (bottom-right) */}
        { !cartItems[id] ? ( <button className="add-btn" onClick={() => addToCart(id, 1)} >+</button>) : 
           (
            <div className="product-counter">
            <button className="counter-btn" onClick={() => removeFromCart(id)} > -  </button>
            <p>{ cartItems[id] }</p>
            <button className="counter-btn" onClick={() => addToCart(id, 1) } > + </button>
            </div>
            )
      }


      
    </div>

    {/* Product details */}
    <div className="product-details">
      {/* Reviews */}
      <div className="product-reviews">
        <span className="stars">★★★★☆</span>
        <span className="reviews-count"> | 33 Reviews</span>
      </div>

      {/* Title */}
      <h3 className="product-name">{name}</h3>
      <p className="product-desc">{description}</p>

      {/* Price */}
      <p className="product-price">
        <span className="old-price"> </span>
        <span className="new-price">₹{price}</span>
        <span className="discount"></span>
      </p>

      {/* Add to cart */}
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  </div>
);

};

export default FoodItem;
