// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import Account from './Account';
import Women from './Women';
import Men from './Men';
import Kid from './Kid';
import Register from './Register';
import Mycart from './Mycart';
import Buynow from './Buynow';
import Admin from './Admin';
import AllProducts from './AllProducts'; 
import AddProduct from './AddProduct'; 
import Orders from './Orders';
import Coupon from './Coupon';
import Categories from './Categories';
import Brands from './Brands';
import OrderDetails from './OrderDetails';
import AdminPage from './AdminPage';
import Sdbar from './Sdbar';
import CustomCursor from './components/CustomCursor';




const App = () => {
  const [state,setState] = useState(false);
  return (
    <Router>
      <div>
        <CustomCursor/>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/men' element={<Men/>} />
          <Route path='/women' element={<Women/>}/>
          <Route path='/kid' element={<Kid/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register/>}  />
          <Route path='/mycart' element={<Mycart/>}/>
          <Route path='/buynow' element={<Buynow/>}/>
          
          {/* <Route path='/admin' element={<Admin/>}/> */}
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
    </Router>
  );
};

export default App;