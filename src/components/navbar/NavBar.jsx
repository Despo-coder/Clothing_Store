import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { FaShoppingBag } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase.config';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);
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

          <FaShoppingBag style={{ margin: '6 6' }} />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavBar;
