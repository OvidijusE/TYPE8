import Calc, { ScientificCalc } from './class/Calc.js';
// nusitaikom
const num1InputEl = document.getElementById('n1') as HTMLInputElement | null;
const num2InputEl = document.getElementById('n2') as HTMLInputElement | null;
// const calculateEl = document.getElementById('calculate') as HTMLButtonElement | null;
const resultEl = document.getElementById('result') as HTMLSpanElement | null;
const selectEl = document.getElementById('action') as HTMLSelectElement | null;
const formEl: HTMLFormElement | null = document.forms[0];

// iskleti arrow funkcija is caclulateEl sukurti atskira funkcija handleCalculations
const handleCalculations = (): void => {
  console.log('lifes good');
  if (!num1InputEl || !num2InputEl || !selectEl || !resultEl) return;
  const num1: number = num1InputEl.valueAsNumber;
  const num2: number = num2InputEl.valueAsNumber;
  const selectedOperationValue: string = selectEl.value;
  const calculator = new ScientificCalc(num1, num2);
  let result: number = 0;
  switch (selectedOperationValue) {
    case 'add':
      result = calculator.add();
      console.log('result ===', result);
      break;
    case 'minus':
      result = calculator.minus();
      break;
    case 'divide':
      result = calculator.divide();
      break;
    case 'multiply':
      result = calculator.multiply();
      break;
    case 'pliusProc':
      result = calculator.pliusProc();
      break;
    case 'minusProc':
      result = calculator.minusProc();
      break;
    case 'power':
      result = calculator.power();
      break;
    default:
      throw new Error('Invalid operation');
  }
  resultEl.textContent = result.toString();
};

// caclulateEl?.addEventListener('mousedown', handleCalculations),
selectEl?.addEventListener('change', handleCalculations);
num2InputEl?.addEventListener('input', handleCalculations);

formEl.addEventListener('submit', (e): void => {
  e.preventDefault();
  handleCalculations;
});
