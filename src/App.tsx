// App.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Components/Product';
import { type ProductProps } from './Components/Product';


export default function App() {

const [products, setProducts] = useState<ProductProps[]>([]);


useEffect(() => {
  axios.get('http://localhost:3000/product')
    .then(res => {
      console.log('Fetched products:', res.data); // add this
      setProducts(res.data);
    })
    .catch(err => {
      console.error('Error fetching products:', err.message); // clearer
    });
}, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {products.length === 0 ? (
        <p>Loading or no products available...</p>
      ) : (
        products.map((product, index) => (
          <Product key={index} {...product} />
        ))
      )}
    </div>
  );
}
