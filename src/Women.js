// Men.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../src/styles/Women.css";
import ProductListDisplay from "./components/WomenCardDisplay";
import Footer from "./components/Footer";

const Women = () => {
  return (
    <>
        <div className="men-container">
      <div className="men-title">Women</div>
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
    <ProductListDisplay/>
    <Footer/>
    </>

  );
};

export default Women;
