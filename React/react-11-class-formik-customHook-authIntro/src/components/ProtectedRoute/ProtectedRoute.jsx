import { Link, Route } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';

function ProtectedRoute(props) {
  const { isUserLoggedIn } = useAuthCtx();
  const { children, ...rest } = props;
  return (
    <Route {...rest}>
      {isUserLoggedIn ? (
        children
      ) : (
        <>
          <h2>Please login</h2>
          <Link to={'/login'}>Login here</Link>
        </>
      )}
    </Route>
  );
}

export default ProtectedRoute;
