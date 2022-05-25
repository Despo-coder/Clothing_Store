import './cartdropdown.scss';
import Button from '../button/Button';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>Go To Cart</Button>
    </div>
  );
};
export default CartDropdown;
