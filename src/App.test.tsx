import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the page header', () => {
  render(<App />);
  const header = screen.getByText("Trader Zach's Tropical To Do List");
  expect(header).toBeInTheDocument();
});
