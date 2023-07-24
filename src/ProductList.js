import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from './CartContext';
const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Product 1', image: 'product1.jpg', price: 10 },
    { id: 2, name: 'Product 2', image: 'product2.jpg', price: 20 },
    { id: 3, name: 'Product 3', image: 'product3.jpg', price: 30 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
