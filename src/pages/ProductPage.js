import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ProductPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="page">
        <h2>Product NAME</h2>
      </div>
    </div>
  );
}

export default ProductPage;
