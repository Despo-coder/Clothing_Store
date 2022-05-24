import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

const Shop = () => {
  const { currentProducts } = useContext(ProductsContext);
  return (
    <div>
      {currentProducts.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
      Shop Page
    </div>
  );
};
export default Shop;
