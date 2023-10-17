import React, { useState, useEffect } from 'react';
import '../styles/CartPage.css'

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Mock API call to load cart items
  useEffect(() => {
    // Replace this with your actual API call function
    const fetchCartItems = async () => {
      try {
        // Simulate API response
        const response = await fetch('your-api-endpoint-for-cart-items');
        const data = await response.json();

        // Set cart items and calculate total price
        setCartItems(data.cartItems); // Replace 'cartItems' with the actual key in your API response
        setTotalPrice(calculateTotalPrice(data.cartItems)); // Implement this function
      } catch (error) {
        console.error('Error loading cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Function to calculate the total price
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
          <button className="checkout-button">Checkout</button>
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
