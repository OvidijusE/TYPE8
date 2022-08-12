import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import css from './Navigation.module.css';

const Navigation = () => {
  // const ctx = useContext(AuthContext);
  const { isLoggedIn, logout } = useContext(AuthContext);
  // console.log('ctx.isLoggedIn ===', ctx.isLoggedIn);
  return (
    <div>
      <nav className={css['nav']}>
        {/* <Link to='/' className={css['nav-item']}></Link>
        <Link to='/login' className={css['nav-item']}></Link>
        <Link to='/logout' className={css['nav-item']}></Link> */}
        <a href='#'>Home</a>
        {!isLoggedIn && <a href='#'>Login</a>}
        {isLoggedIn && (
          <a role='button' onClick={logout} href='#'>
            Logout
          </a>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
