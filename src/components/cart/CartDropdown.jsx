import './cartdropdown.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import CartItems from './CartItems';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to='/checkout'>
        <Button>Check-Out</Button>
      </Link>
    </div>
  );
};
export default CartDropdown;
