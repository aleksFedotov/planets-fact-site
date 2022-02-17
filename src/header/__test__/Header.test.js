import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header component testing', () => {
  test('logo rendering', () => {
    render(<Header />);
    const logo = screen.getByText(/the planets/i);
    expect(logo).toBeInTheDocument();
  });

  test('all navigations items renders', () => {
    render(<Header />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(8);
  });
});
