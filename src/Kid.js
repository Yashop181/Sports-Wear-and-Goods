// Men.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../src/styles/Kid.css";
import ProductListDisplayp from "./components/KidCardDisplay";
import Footer from "./components/Footer";

const Kid = () => {
  return (
    <>
        <div className="men-container">
      <div className="men-title">Kid</div>
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
    <ProductListDisplayp/>
    <Footer/>


    </>

  );
};

export default Kid;
