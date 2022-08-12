import { Link, Route } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';
import css from './ProtectedRoute.module.css';

function ProtectedRoute(props) {
  const { isUserLoggedIn } = useAuthCtx();
  const { children, ...rest } = props;
  return (
    <Route {...rest}>
      {isUserLoggedIn ? (
        children
      ) : (
        <div className={css['protected-container']}>
          <h2>This content is for logged in users</h2>
          <Link className={css['nav-link']} to={'/login'}>
            Login here
          </Link>
        </div>
      )}
    </Route>
  );
}

export default ProtectedRoute;
