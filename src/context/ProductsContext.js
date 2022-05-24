import { createContext, useState } from 'react';
import PRODUCTS from '../assets/shopData.json';

export const ProductsContext = createContext({
  currentProducts: [],
});

export const ProductProvider = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState(PRODUCTS);
  const value = { currentProducts, setCurrentProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
