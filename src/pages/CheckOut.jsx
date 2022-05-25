import { useContext, useEffect } from 'react';
import '../checkoutStyles.scss';
import CheckOutItems from './CheckOutItems';
import { CartContext } from '../context/CartContext';

const CheckOut = () => {
  const { cartItems, setIsCartOpen, isCartOpen, carttotal } =
    useContext(CartContext);

  //   //Update the Cart Item Count
  //   //1. Extract the quantity from CartItems
  //   //2. Use the reduce Method to add all the contents
  //   const newCartItem = cartItems.map((item) => item.price * item.quantity);
  //   const sumWithInitial = newCartItem.reduce(
  //     (total, cartItem) => total + cartItem,
  //     0
  //   );
  //   console.log(carttotal);
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
      <span className='total'>Total: ${carttotal}.00</span>
    </div>
  );
};
export default CheckOut;
