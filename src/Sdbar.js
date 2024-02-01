import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import "../src/styles/SidMain.css";
const Sdbar = () => {
  return (
    <>
      <div className="sidebar" id='sidebar'>
      <div className="user-info">
        <FaUser className="user" size="2x" />
        <p>Yash Nigam</p>
      </div>
      <nav className="nav-lin">
        <Link to="/adminPage" >Admin Page</Link>
        <Link to="/all-products">All Products</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/add-orders">Orders</Link>
        <Link to="/add-coupon">Coupon</Link>
        <Link to="/add-categories">Categories</Link>
        <Link to="/add-brands">Brands</Link>
        <Link to="/order-details">OrderDetails</Link>
        
      </nav>
    </div>
 
    </>

  );
};

export default Sdbar;
