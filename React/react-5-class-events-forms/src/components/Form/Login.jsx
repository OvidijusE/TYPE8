// Login.jsx componentas
import { useState } from 'react';

function Login() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showUsername, setShowUsername] = useState(false);

  /**
   * take input value from input and update state with it
   */
  function usernameEnterHandler(event) {
    console.log('entering value to input');
    console.log(event.target); // ===  <input type='text' placeholder='Login here' />
    const inputEl = event.target;
    const ivestaReikme = inputEl.value;
    setUsernameValue(ivestaReikme);
  }

  function passwordEnterHandler(event) {
    setPasswordValue(event.target.value);
  }

  return (
    <div className='login'>
      <form onSubmit={sendValues}>
        <input
          onChange={usernameEnterHandler}
          value={usernameValue}
          type='text'
          placeholder='Login here'
        />
        <input
          onChange={passwordEnterHandler}
          value={passwordValue}
          type='password'
          placeholder='Enter your password'
        />
        <h3>Jus ivedete: {usernameValue}</h3>

        <button type='submit'>send</button>
      </form>
      {showUsername && <h2>{usernameValue}</h2>}
    </div>
  );

  function sendValues(event) {
    event.preventDefault();
    // send values
    // pagaminti objecta is input reiksmiu
    if (usernameValue === '') return;
    const loginObj = {
      username: usernameValue,
      pasword: passwordValue,
    };
    console.log('loginObj ===', loginObj);
    // clear inputs
    setUsernameValue('');
    setPasswordValue('');
  }

  function displayValue() {
    console.log('displayValue called');
    setShowUsername(!showUsername);
  }
}

export default Login;
