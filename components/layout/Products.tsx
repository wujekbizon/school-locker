import './Products.scss';
import type { Items } from '../../data/data';

export type ItemsProps = {
  items: Items[];
  handleEvent: React.MouseEventHandler<HTMLDivElement>;
  active: string;
};

const Products = ({ items, handleEvent, active }: ItemsProps) => {
  return (
    <div className="products-wrapper">
      {items.map((item, index) => (
        <div
          key={item.product}
          id={`${index}`}
          className={
            active === index.toString()
              ? 'active product-wrapper'
              : 'product-wrapper'
          }
          onMouseOver={handleEvent}
        >
          <h4 className="item-title">{item.product}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
