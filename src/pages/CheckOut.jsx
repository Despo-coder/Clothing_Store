import { useContext, useEffect } from 'react';
import '../checkoutStyles.scss';
import CheckOutItems from './CheckOutItems';
import { CartContext } from '../context/CartContext';

const CheckOut = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);

  useEffect(() => {
    setIsCartOpen(isCartOpen);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItems key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: 0</span>
    </div>
  );
};
export default CheckOut;
