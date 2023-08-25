import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  return (
    <div className="page-container">
      <Header />
      <div className="page">
        <h2>Welcome to our shop!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, sapien id ultricies vehicula, elit elit sodales purus, in
        </p>
        <Link to="/products">View Products</Link>
      </div>
    </div>
  );
}

export default Home;
