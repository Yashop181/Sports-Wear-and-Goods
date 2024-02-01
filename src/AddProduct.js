// AddProduct.js

import React, { useState } from 'react';
import "../src/styles/AddProduct.css";
import ImageUpload from './ImageUpload';
import Admin from './Admin';

const AddProduct = () => {
  const [productImages, setProductImages] = useState([]);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productColor, setProductColor] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleImageUpload = (event) => {
    // Handle image upload logic and update state
    const files = event.target.files;

    // Display the first selected image in the "Product Image" field
    if (files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setProductImages([imageUrl]);
    } else {
      setProductImages([]);
    }
  };

  const handleFormSubmit = (event) => {
    // Handle form submission logic
    event.preventDefault();
    // Add your logic to send the data to the server or perform any other actions
  };

  return (
    <section style={{display:"flex"}}>
    <Admin/>
    <div className="add-product-container">
      <h1 className="page-title">Add Product</h1>
      <form className="product-form" onSubmit={handleFormSubmit}>

        <ImageUpload/>

        <div className="form-group">
          <label className="form-label">Product Name:</label>
          <input className="form-input" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Product Category:</label>
          <select className="form-input" value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
            {/* Add category options */}
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Product Brand:</label>
          <select className="form-input" value={productBrand} onChange={(e) => setProductBrand(e.target.value)}>
            {/* Add brand options based on selected category */}
            {/* You can fetch and populate these options dynamically */}
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Product Color:</label>
          <input className="form-input" type="text" value={productColor} onChange={(e) => setProductColor(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Regular Price:</label>
          <input className="form-input" type="text" value={regularPrice} onChange={(e) => setRegularPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Product Price:</label>
          <input className="form-input" type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Product Quantity:</label>
          <input className="form-input" type="text" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Product Description:</label>
          <textarea
            className="form-textarea"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
      
    </div>
    </section>
  );
};

export default AddProduct;
