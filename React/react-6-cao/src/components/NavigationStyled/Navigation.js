// import { Link } from 'react-router-dom';
import { Nav, Link } from './styled';

const NavigationStyled = () => {
  return (
    <Nav className='main-nav'>
      <Link href='/'>Home</Link>
      <Link href='/add'>Add</Link>
    </Nav>
  );
};

export default NavigationStyled;
