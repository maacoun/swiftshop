import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'react-feather';
import Rating from './Rating';

function ProductTile({ product }) {
  const formattedPrice = new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK'
  }).format(product.price).replace(',00', '');

  return (
    <div className="product-tile">
      <div className="product-image">
        <img src='https://via.placeholder.com/300x300' alt={product.name} />
      </div>
      <div className="product-rating">
        <Rating value={Math.floor(Math.random() * 6)} />
      </div>
      <div className="product-name">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
      <div className="product-price">{formattedPrice}</div>
      <div className="product-cart">
        <Link to="/cart">
          <ShoppingBag color="white" />
        </Link>
      </div>
    </div>
  );
}

export default ProductTile;
