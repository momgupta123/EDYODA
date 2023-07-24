import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  const product = {
    id: 1,
    name: 'Product 1',
    image: 'product1.jpg',
    price: 10,
    description: 'Product 1 description'
  };

  return (
    <div>
      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
