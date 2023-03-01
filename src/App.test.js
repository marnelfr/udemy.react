import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all products nav link', () => {
  render(<App />);
  const linkElement = screen.getByText(/all products/i);
  expect(linkElement).toBeInTheDocument();
});
