import React from 'react';
import Cart from '../components/Cart';

function CartPage() {
  return (
    <div>
      <h2>Your Cart</h2>
      <Cart />
      {/* Add total price and checkout button */}
    </div>
  );
}

export default CartPage;
