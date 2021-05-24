import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getByText("Groceries catalogue");
  expect(header).toBeInTheDocument();

  const searchPage = screen.getByText(/search grocery/i);
  expect(searchPage).toBeInTheDocument();

  const copyright = screen.getByText(/©/i);
  expect(copyright).toBeInTheDocument();
});
