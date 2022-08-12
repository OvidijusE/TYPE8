import { useState } from 'react';
import css from './Counter.module.css';

function Counter({ title, initValue = 0 }) {
  const [counterValue, setCounterValue] = useState(initValue);
  const [hideLabel, setHideLabel] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function handleCounterIncrement() {
    setCounterValue((prevState) => prevState + 1);
  }

  function handleCounterDecrement() {
    setCounterValue((prevState) => prevState - 1);
  }

  function handleCounterReset() {
    setCounterValue(0);
  }

  function handleHideLabel() {
    setHideLabel((prevState) => !prevState);
  }
  return (
    <div className={css.counter}>
      <div className={css.title}>{!hideLabel && <h3>{title}</h3>}</div>
      <h2 className={css.result}>{counterValue}</h2>
      <div className={css.control}>
        <button className={css.btn} onClick={handleCounterIncrement}>
          Add
        </button>
        <button className={css.btn} onClick={handleCounterDecrement}>
          Minus
        </button>
        <button className={css.btn} onClick={handleCounterReset}>
          Reset
        </button>
        <button className={css.btn} onClick={handleHideLabel}>
          {!hideLabel ? 'Hide' : 'Show'} Label
        </button>
      </div>
      <div className={css['dark-mode-toggler']}>
        <label htmlFor='darkMode'>dark mode</label>
        <input
          type='checkbox'
          name='checkbox'
          id='darkMode'
          value={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
          onClick={() => setDarkMode((prevState) => !prevState)}
          className={`${css.light} ${css.dark}`}
        />
        Dark mode {!darkMode ? 'off' : 'on'}
      </div>
    </div>
  );
}

export default Counter;
