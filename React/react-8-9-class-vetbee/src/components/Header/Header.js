import css from './Header.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../store/themeContext';
import Button from '../../UI/Button';

function Header() {
  // const value = useContext(ThemeContext);
  const { nightMode } = useContext(ThemeContext);

  const handleClick = (e) => {
    // SetNightMode((current) => !current);
  };
  return (
    <header className={nightMode ? '#333' : '#fff'}>
      <div className={css['header-container']}>
        <img className={css['vet-bee-logo']} src='assets/vet-bee-logo.png' alt='' />
        <nav className={css['main-nav']}>
          <Button secondary onClick={handleClick}>
            Dark Mode
          </Button>
          <Link className={css['nav-item']} to='/'>
            Pets
          </Link>
          <Link className={css['nav-item']} to='/medications'>
            Medications
          </Link>
        </nav>
      </div>
      <div className={css['hr']}></div>
    </header>
  );
}

export default Header;
