import css from './Login.module.css';

import { useContext, useRef, useReducer } from 'react';
import AuthContext from '../../store/authContext';

const initValues = {
  username: '',
  password: '',
  password1: '',

  usernameErr: '',
  passwordErr: '',
};

function loginReducerFn(state, action) {
  switch (action.type) {
    case 'password':
      if (state.username.length === 0) {
        return { ...state, password: action.payload, usernameErr: 'Privalomas laukas' };
      }
      return { ...state, password: action.payload };
    case 'username':
      return { ...state, username: action.payload, usernameErr: '' };
    case 'usernameBlur':
      if (state.username.length === 0) {
        return { ...state, usernameErr: 'Privalomas laukas' };
      }
      return state;
    case 'input':
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      throw new Error('Invalid action type: ' + action.type);
  }
}

function Login() {
  // TODO: Login abu inputus valdom su vienu useReducer state
  const [state, dispatch] = useReducer(loginReducerFn, initValues);

  const ctx = useContext(AuthContext);

  const userNameRef = useRef();

  function handleLogin(e) {
    e.preventDefault();
    console.log('react is in control');
    const name = userNameRef.current.value;
    // console.log('name ===', name);
    ctx.login(name);
  }

  if (ctx.isLoggedIn) return <h2>Prisiloginai Sveikinmai</h2>;

  return (
    <div className={css['login']}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          onChange={(e) => dispatch({ type: 'username', payload: e.target.value })}
          onBlur={() => dispatch({ type: 'usernameBlur' })}
          ref={userNameRef}
          type='text'
          id='username'
          placeholder='Enter username'
        />
        {state.usernameErr && <p className='error'>{state.usernameErr}</p>}
        <input
          onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
          value={state.password}
          type='password'
          name='password'
          placeholder='Enter password'
        />
        <input
          onChange={(e) => dispatch({ type: 'input', payload: e.target })}
          value={state.password1}
          type='password'
          name='password1'
          placeholder='Enter password'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
  //   function handleSubmit(event) {
  //     event.preventDefault();

  //     if (usernameValue === '') return;
  //     const loginObj = {
  //       username: usernameValue,
  //       pasword: passwordValue,
  //     };
  //     console.log('loginObj ===', loginObj);
  //     // clear inputs
  //     setUsernameValue('');
  //     setPasswordValue('');
  //   }
}

export default Login;
