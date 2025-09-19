import React, { useRef } from "react";
import "./ProductSlide.css";

const products = [
  { id: 1, name: "Veg Burger", price: "₹200.99", rating: 4, image: "/images/burger.png" },
  { id: 2, name: "French Fries", price: "₹120.50", rating: 5, image: "/images/combo.png" },
  { id: 3, name: "Falafel Balls", price: "₹180.75", rating: 4, image: "/images/cutlet.png" },
  { id: 4, name: "Veg Platter", price: "₹250.00", rating: 5, image: "/images/ff.png" },
  { id: 5, name: "Cheese Pizza", price: "₹299.00", rating: 4, image: "/images/burger.png" },
  { id: 6, name: "Pasta", price: "₹220.00", rating: 3, image: "/images/burger.png" },
  { id: 7, name: "Hot Dog", price: "₹150.99", rating: 4, image: "/images/burger.png" },
  { id: 8, name: "Chicken Burger", price: "₹280.50", rating: 5, image: "/images/burger.png" },
  { id: 9, name: "Sandwich", price: "₹140.00", rating: 3, image: "/images/burger.png" },
  { id: 10, name: "Momos", price: "₹110.00", rating: 4, image: "/images/burger.png" },
  { id: 11, name: "Tacos", price: "₹230.00", rating: 5, image: "/images/burger.png" },
  { id: 12, name: "Biryani", price: "₹320.00", rating: 5, image: "/images/burger.png" },
  { id: 13, name: "Paneer Roll", price: "₹180.00", rating: 4, image: "/images/burger.png" },
  { id: 14, name: "Idli Sambar", price: "₹90.00", rating: 4, image: "/images/burger.png" },
  { id: 15, name: "Dosa", price: "₹120.00", rating: 5, image: "/images/burger.png" },
];

const ProductSlides = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  

  return (
    <div className="product-slides">
      <h2 className="section-title">Our Popular Products</h2>

      {/* Slide Buttons */}
      <div className="slide-buttons">
        <button onClick={slideLeft} className="slide-btn">{"<"}</button>
        <button onClick={slideRight} className="slide-btn">{">"}</button>
      </div>

      {/* Product Row */}
      <div className="product-container" ref={sliderRef}>
        {products.map((product) => (
        <div className="product-card">
        {/* Product Image Section */}
        <div className="product-img-wrapper">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-overlay">
            <button className="overlay-btn">❤️</button>
            <button className="overlay-btn">👁</button>
            </div>
        </div>

        {/* Product Info Section */}
        <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-meta">
            <span className="product-price">₹{product.price}</span>
            <span className="product-rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
            </span>
            </div>
            <p className="product-desc">Delicious & fresh {product.name}, try it now!</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        </div>


        ))}
      </div>
    </div>
  );
};

export default ProductSlides;
