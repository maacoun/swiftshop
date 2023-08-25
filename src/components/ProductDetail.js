import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams(); // Retrieve product ID from URL params

  // Fetch product details based on productId
  // Replace this with actual API calls to your backend

  return (
    <div>
      <h2>Product Details</h2>
      {/* Display product information */}
    </div>
  );
}

export default ProductDetail;
