// Men.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../src/styles/Men.css";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

const Men = () => {
  return (
    <>
        <div className="men-container">
      <div className="men-title">Men</div>
      <div className="middle-content">
        {/* Wrap each category with Link */}
        <Link to="/men/shoes" className="category-link">
          <div className="category">Shoes</div>
        </Link>
        <Link to="/men/clothing" className="category-link">
          <div className="category">Clothing</div>
        </Link>
        <Link to="/men/gear" className="category-link">
          <div className="category">Gear</div>
        </Link>
      </div>
    </div>
    <ProductList/>
    <Footer/>
    </>

  );
};

export default Men;
