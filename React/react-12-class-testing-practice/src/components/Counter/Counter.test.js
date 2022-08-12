import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

//1. it should render component
it('should render compnent', () => {
  render(<Counter />);
});

//2. it should render title from props
it('should render title from props', () => {
  render(<Counter title='Reps counter' />);
  const headerEl = screen.getByRole('heading', { name: 'Reps counter' });
  expect(headerEl).toBeInTheDocument();
});

// it should render 4 buttons
it('should render 4 buttons', () => {
  render(<Counter title='Reps counter' />);
  const buttonsArr = screen.getAllByRole('button');
  expect(buttonsArr.length).toBe(4);
});

//3. it should increase the counter by 1 after i press Add
it('should increase the counter by 1 after i press Add', () => {
  render(<Counter title='Reps counter' />);
  const addBtn = screen.getByRole('button', { name: 'Add' });
  fireEvent.click(addBtn);
  const counterEl = screen.getByRole('heading', { name: 1 });
  expect(counterEl).toHaveTextContent('1');
});

//4. it should decrease the counter by 1 after i press Minus
it('should decrease the counter by 1 after i press minus', () => {
  render(<Counter title='Reps counter' />);
  const minusBtn = screen.getByRole('button', { name: 'Minus' });
  fireEvent.click(minusBtn);
  const counterEl = screen.getByRole('heading', { name: -1 });
  expect(counterEl).toHaveTextContent('-1');
});

//5. it should hide title if i press HideLabel
it('should hide title if i press Hidelabel', () => {
  render(<Counter title='Reps counter' />);
  const hideBtn = screen.getByRole('button', { name: 'Hide Label' });
  fireEvent.click(hideBtn);
  const titleEl = screen.queryByText('Reps counter');
  expect(titleEl).not.toBeInTheDocument();
});

//6. it should reset the counter after i press reset
it('should reset the counter after i press reset', () => {
  render(<Counter title='Reps counter' />);
  const resetBtn = screen.getByRole('button', { name: 'Reset' });
  fireEvent.click(resetBtn);
  const counterEl = screen.getByRole('heading', { name: 0 });
  expect(counterEl).toHaveTextContent('0');
});

//7. the hide/show button works as expected
it('the hide/show button works as expected', () => {
  render(<Counter title='Reps counter' />);
  const hideBtn = screen.getByRole('button', { name: 'Hide Label' });
  fireEvent.click(hideBtn);
  expect(hideBtn).toHaveTextContent('Show Label');
});

//7. the hide/show button works as expected
// it('the hide/show button works as expected', () => {
//   render(<Counter title='Reps counter' />);
//   const hideBtn = screen.getByText('Hide Label');
//   fireEvent.click(hideBtn);
//   const labelEl = screen.getByRole('heading', { name: 'Reps counter' });
//   expect(labelEl).not.toBeVisible();
// });
