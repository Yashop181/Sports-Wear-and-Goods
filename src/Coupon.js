import React, { useState } from 'react';
import "../src/styles/Coupon.css"; 
import Admin from './Admin';

const Coupon = () => {
  const [coupons, setCoupons] = useState([]);
  const [couponName, setCouponName] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSaveCoupon = () => {
    // Validate and save the coupon to the state
    if (couponName && discountPercentage && expiryDate) {
      const newCoupon = {
        serialNumber: coupons.length + 1,
        name: couponName,
        discountPercentage: discountPercentage,
        dateCreated: new Date().toLocaleDateString(),
        expiryDate: expiryDate,
      };

      setCoupons([...coupons, newCoupon]);

      // Clear the form fields after saving the coupon
      setCouponName('');
      setDiscountPercentage('');
      setExpiryDate('');
    }
  };

  const handleDeleteCoupon = (serialNumber) => {
    // Delete the coupon based on serial number
    const updatedCoupons = coupons.filter((coupon) => coupon.serialNumber !== serialNumber);
    setCoupons(updatedCoupons);
  };

  return (
    <section style={{display:"flex"}}>
      <Admin/>
      <div className="coupon-container">
      <h1>All Coupons</h1>
      
      {/* Coupons Table */}
      <table className="coupons-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Discount%</th>
            <th>Date Created</th>
            <th>Expiry Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon.serialNumber}>
              <td>{coupon.serialNumber}</td>
              <td>{coupon.name}</td>
              <td>{coupon.discountPercentage}</td>
              <td>{coupon.dateCreated}</td>
              <td>{coupon.expiryDate}</td>
              <td>
                <button onClick={() => handleDeleteCoupon(coupon.serialNumber)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Create Coupon Section */}
      <hr />
      <h1>Create Coupon</h1>
      <p>Use the form to create a coupon.</p>

      {/* Coupon Form */}
      <div className="coupon-form">
        <label>Coupon Name:</label>
        <input type="text" value={couponName} onChange={(e) => setCouponName(e.target.value)} />

        <label>Discount%:</label>
        <input type="text" value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)} />

        <label>Expiry Date:</label>
        <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

        <button onClick={handleSaveCoupon}>Save Coupon</button>
      </div>
    </div>


    </section>
  );
};

export default Coupon;
