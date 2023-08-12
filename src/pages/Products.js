import React from 'react';
import ProductList from './ProductList'; // Make sure to adjust the path to the actual location

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 20
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 30
  },
  // ... Add more product objects as needed
];

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
