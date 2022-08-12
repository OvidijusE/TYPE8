import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

const mockFn = jest.fn();

it('change button class', () => {
  render(<Button title='button' />);
  const buttonEl = screen.getByText('button');
  fireEvent.click(buttonEl);
  expect(buttonEl).toBeInTheDocument();
});
