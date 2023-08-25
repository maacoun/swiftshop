import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ProductTileCarousel from '../components/ProductTileCarousel';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://localhost:7035/api/Product/foryoupicks');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div className="page-content">
        <h2>We cherry picked these for you</h2>
          <div className="products">
            {products.map((product) => (
              <ProductTileCarousel key={product.id} product={product} />
            ))}
          </div>
      </div>
  </div>
  );
}

export default Home;
  
