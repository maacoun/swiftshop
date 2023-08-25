import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'react-feather';
import Rating from './Rating';

function ProductTileCarousel(props) {
    const formattedPrice = new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK' }).format(props.product.price).replace(',00', '');


    return (
        <div className="product">
            <div className="product-image">
                <img src={props.product.image} alt={props.product.name} />
            </div>
            <div className="product-rating">
                <Rating value= {Math.floor(Math.random() * 6)} />

            </div>
            <div className="product-name">
                <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
            </div>
            <div className="product-price">
                {formattedPrice}
            </div>
            <div className="product-cart">
                <Link to="/cart">
                    <ShoppingBag color='white' />
                </Link>
            </div>
        </div>
    );
}

export default ProductTileCarousel;