import React from 'react';
import { Route, Routes } from 'react-router-dom';


import AllProducts from './AllProducts'; 
import AddProduct from './AddProduct'; 
import Orders from './Orders';
import Coupon from './Coupon';
import Categories from './Categories';
import Brands from './Brands';
import OrderDetails from './OrderDetails';
import AdminPage from './AdminPage';

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path='/adminPage' element={<AdminPage/>}/> 
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path='/add-orders' element={<Orders/>} />
        <Route path='/add-coupon' element={<Coupon/>} />
        <Route path='/add-categories' element={<Categories/>} />
        <Route path='/add-brands' element={<Brands/>} />
        <Route path='/order-details' element={<OrderDetails/>} />
        
      </Routes>
    </div>
  );
};

export default MainContent;
