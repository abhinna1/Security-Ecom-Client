import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2">${product.price}</p>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
