import { useState } from 'react';

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  // parasyti funkcija handleCounterIncrement() kuri didina counterValue 1
  function handleCounterIncrement() {
    setCounterValue((prevState) => prevState + 1);
  }
  // parasyti funkcija handleCounterDecrement() kuri mazina counterValue 1
  // toliau-1 neleisti skaiciaus padaryti neigiamu
  function handleCounterDecrement() {
    if (counterValue <= 0) {
      return;
    }
    setCounterValue((prevState) => prevState - 1);
  }
  // parasyti funkcija handleCounterChange() kuri mazina arba didina counterValue 1
  //   nebaigtas
  function handleCounterChange() {
    setCounterValue((prevState) => prevState - 1);
  }
  // toliau-2 leisti neigiama. jei teigiamas tai zalias skaiciaus jei neigiamas tai raudonas
  const isCounterPositive = counterValue !== 0;
  return (
    <div className='counter'>
      <h3 onMouseEnter={handleCounterIncrement}>Counter</h3>
      <h2 className={`${isCounterPositive ? 'positive' : 'negative'}`}>{counterValue}</h2>
      <div className='control'>
        <button className='btn' onClick={handleCounterIncrement}>
          plus
        </button>
        {isCounterPositive && (
          <button disabled={!isCounterPositive} className='btn' onClick={handleCounterDecrement}>
            minus
          </button>
        )}
        <button className='btn' onClick={handleCounterChange}>
          change
        </button>
      </div>
    </div>
  );
}

export default Counter;
