import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import ProductTile from '../components/ProductTile';
import CountUpComponent from '../components/CountUp';
import Footer from '../components/Footer';
import { CarouselLeftArrow, CarouselRightArrow } from '../components/CarouselArrows'; // Import the arrows


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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    prevArrow: <CarouselLeftArrow />,
    nextArrow: <CarouselRightArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="page-container">
      <div className="wrapper">
      <Header />
      <div className="page-banner">
        <div className="page-banner-content">
          <CountUpComponent number={215089} />
          <p>Satisfied customers</p>
        </div>
        <div className="page-banner-content">
          <CountUpComponent number={76857} />
          <p>Products in our store</p>
        </div>
        <div className="page-banner-content">
          <CountUpComponent number={2034} />
          <p>Products shipped today</p>
        </div>
      </div>
      <div className="page-content">
        <h2>We cherry picked these for you</h2>
        <div className="products">
          {products.length > 0 ? (
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <ProductTile key={product.id} product={product} />
              ))}
            </Slider>
          ) : (
            <p>
              Oops! Looks like our API got camera shy and is hiding from us. Don't panic, our tech wizards are working on coaxing it back online. In the meantime, feel free to explore our collection of imaginary products – perfect for your daydreaming needs! 😄 And just to clear things up, this demo is brought to you by a student budget, so no fancy cloud hosting here! 🎓🌩️
            </p>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Home;