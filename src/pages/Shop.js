import { useContext } from 'react';
import '../shop-styles.scss';
import { ProductsContext } from '../context/ProductsContext';
import ProductCard from '../components/product-card/ProductCard';

const Shop = () => {
  const { currentProducts } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
