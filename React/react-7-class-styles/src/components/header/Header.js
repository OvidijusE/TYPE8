import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <nav className='main-nav'>
        <a className={css['nav-link']} href='#home'>
          HOME
        </a>
        <a className={css['nav-link']} href='#band'>
          BAND
        </a>
        <a className={css['nav-link']} href='#tour'>
          TOUR
        </a>
        <a className={css['nav-link']} href='#contact'>
          CONTACT
        </a>
      </nav>

      <a className={css['nav-link']} href='#search'>
        <i className='fa fa-search' aria-hidden='true'></i>
      </a>
    </header>
  );
}

export default Header;
