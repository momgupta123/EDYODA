import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="shopping-cart-empty">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price}</p>
              <button
                className="cart-item-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from Cart
              </button>
              <button
                className="cart-item-button"
                onClick={() => addToCart(item.id)}
              >
                Add from Cart
              </button>
            </div>
          ))}
          <p className="cart-total">Total Price: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
