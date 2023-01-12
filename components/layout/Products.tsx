import './Products.scss';
import { useState } from 'react';

import type { Items } from '../../data/data';

const Products = ({ items }: { items: Items[] }) => {
  const [active, setActive] = useState('0');
  return (
    <div className="products-wrapper">
      {items.map((item, index) => (
        <div
          key={item.product}
          id={`${index}`}
          className={
            active === '0' ? 'active product-wrapper' : 'product-wrapper'
          }
        >
          <h4>{item.product}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
