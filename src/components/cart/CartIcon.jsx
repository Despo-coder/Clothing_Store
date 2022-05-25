import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart-icon.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  //Update the Cart Item Count
  //1. Extract the quantity from CartItems
  //2. Use the reduce Method to add all the contents
  // const newCartItem = cartItems.map((item) => item.quantity);
  // const sumWithInitial = newCartItem.reduce(
  //   (total, cartItem) => total + cartItem,
  //   0
  // );

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingBag className='.shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};
export default CartIcon;
