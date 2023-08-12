import React from 'react';
import { Link } from 'react-router-dom';
import ClientRoutes from '../routes/ClientRoutes';

const ProductCard = ({ product }) => {
  return (
    <Link to={ClientRoutes.ProductRoutes.product_detail_route(product.id)} className="border p-4 mb-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2">Rs.{product.price}</p>
      <button className='p-2 bg-blue-600 text-white hover:bg-blue-400 hover:text-black duration-150 w-full rounded-md mt-3'>Add to cart</button>
    </Link>
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
