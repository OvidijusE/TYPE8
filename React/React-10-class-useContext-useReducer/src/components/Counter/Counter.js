import { useReducer } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import css from './Counter.module.css';

const ACTIONS = {
  INCR: 'INCR',
  DECR: 'DECR',
  DOWN5: 'DOWN5',
  UPBY: 'UPBY',
};

const initCounterValue = { count: 0 };

function counterReducer(state, action) {
  console.log('state ===', state);
  console.log('action ===', action);

  //   if (action.type === 'DECR') {
  //     return { count: state.count - 1 };
  //   }
  //   return { count: state.count + 1 };
  // }

  switch (action.type) {
    case ACTIONS.INCR:
      if (state.count === 7) {
        // const stateCopy = { ...state };
        // stateCopy.error = 'Value greater than 7 is not allowed';
        // return stateCopy;
        return { ...state, error: 'Value greater than 7 is not allowed' };
      }
      return { count: state.count + 1 };
    case ACTIONS.UPBY:
      return { count: state.count + action.payload };
    case 'DECR':
      if (state.count === 0) {
        const stateCopy = { ...state };
        stateCopy.error = 'Negative value not allowed';
        return stateCopy;
        /**
         * {
         * count: 0,
         * error: 'Negative not allowed'
         * }
         */
      }
      return { count: state.count - 1 };
    case 'DOWN5':
      return { count: state.count - 5 };
    default:
      throw new Error('uknown type');
  }
}

const Counter = () => {
  // const [value, setValue] = useState(0);

  const [state, dispatch] = useReducer(counterReducer, initCounterValue);

  function handleInc() {
    // setValue((prevState) => prevState + 1);
    dispatch({ type: ACTIONS.INCR });
  }

  function handleDec() {
    // if (state.count <= 0) {
    //   return;
    // }
    dispatch({ type: ACTIONS.DECR });
  }

  // TODO padaryti reset

  // TODO: padaryti kad negalima didinti daugiau negu 7. atvaizduoti klaida ir paslepti mygtuka
  return (
    <div className={css['counter']}>
      <h2 className={css['count']}>{state.count}</h2>
      {/* {patikrinti ar yra klaida, jei yra atvaizuoti} */}
      {state.error && <h3>{state.error}</h3>}
      <div className={css['control']}>
        {/* <button onClick={() => setValue((prevValue) => prevValue + 1)} className={css['plus']}>
          Plus
        </button> */}

        {/* <button onClick={() => dispatch({ type: ACTIONS.UPBY, payload: 7 })}>up by 7</button> */}
        {/* <button onClick={handleInc}>Plus</button> */}
        {state.count < 7 && <button onClick={handleInc}>Plus</button>}
        <button onClick={handleDec}>Minus</button>
        <button onClick={() => dispatch({ type: 'DOWN5', payload: 5 })}>down 5</button>
      </div>
      <Card />
    </div>
  );
};

export default Counter;
