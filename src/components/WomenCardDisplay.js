// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import productu from './WomenCard';

const ProductListDisplay = () => {
  const handleAddToCart = (product) => {
    // Implement your logic for adding to cart
    console.log('Added to cart:', product);
  };

  const handleBuyNow = (product) => {
    // Implement your logic for buying now
    console.log('Buy Now:', product);
  };

  return (
    <div className="product-list">
      {productu.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      ))}
    </div>
  );
};

export default ProductListDisplay;
