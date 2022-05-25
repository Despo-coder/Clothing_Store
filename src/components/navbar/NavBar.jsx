import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import '../cart/cart-icon.scss';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';
import { signOutUser } from '../../utils/firebase.config';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            Shop
          </Link>
          <Link to='/shop' className='nav-link'>
            Contact
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              {' '}
              Sign Out
            </span>
          ) : (
            <Link to='/auth' className='nav-link'>
              Login
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavBar;
