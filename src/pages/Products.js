import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList'; // Make sure to adjust the path to the actual location
import api from '../common/hooks/api';
import ServerRoutes from '../routes/ServerRoutes';

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     description: 'Description for Product 1',
//     price: 20
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     description: 'Description for Product 2',
//     price: 30
//   },
//   // ... Add more product objects as needed
// ];


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        api.get(ServerRoutes.ProductRoutes.base_route)
        .then(res=>{
            setProducts(res.data.data)
        })
    }, [])
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
