// ProductCard.js
import React from 'react';
import { FaCartPlus, FaShoppingCart } from 'react-icons/fa';
import "../styles/ProductCard.css";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product);
    navigate('/mycart'); // Navigate to MyCart page
  };

  const handleBuyNow = () => {
    onBuyNow(product);
    navigate('/buynow'); // Navigate to MyCart page
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.description} />
      <p>{product.description}</p>
      <div className="button-container">
        <button className="add-to-cart" onClick={handleAddToCart}>
          <FaCartPlus /> Add to Cart
        </button>
        
        <button className="buy-now" onClick={handleBuyNow}>
          <FaShoppingCart /> Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
