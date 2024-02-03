import React from 'react';
import "../src/styles/Mycart.css";

const MyCart = () => {
  return (
    <div className="cart-container">
      <div className="left-section">
        <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" />
        <div className="small-images">
          <img src="https://plus.unsplash.com/premium_photo-1673481600920-72fa9fc062cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 1" />
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 2" />
          <img src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 3" />
          <img src="https://images.unsplash.com/photo-1537274942065-eda9d00a6293?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product 4" />
        </div>
      </div>
      <div className="right-section">
        <div className="description">
          <p>Product Description</p>
          <p>In Stock</p>
          
          <p>Price: $382.00</p>
          <p>Size: 
            <select>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </p>
          <p>Quantity:
            <select>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </select>
          </p>
          <div className="button-container">
            <button className="delete-btn">Delete</button>
            <button className="save-btn">Save for Later</button>
          </div>
        </div>
        <div className="subtotal">
          <p>Subtotal (1 item): $382.00</p>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
