import { useContext } from 'react';
import AuthContext from '../../store/authContext';
import css from './Card.module.css';

const Card = (props) => {
  // const value = useContext(AuthContext);
  const ctx = useContext(AuthContext);

  if (!ctx.isLoggedIn) return <h2>You are logged out, please log in again.</h2>;

  return (
    <div className={css['card']}>
      {props.children}
      <h3>You are now logged in as : {ctx.currentUser} </h3>
      <button onClick={ctx.logout}>Logout</button>
    </div>
  );
};

export default Card;
