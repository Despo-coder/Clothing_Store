import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart-icon.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingBag className='.shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};
export default CartIcon;
