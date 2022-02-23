import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MobileMenu from '../MobileMenu';

describe('mobile menu testing', () => {
  const toggleFunction = jest.fn();
  test('All 8 links renders', () => {
    render(
      <BrowserRouter>
        <MobileMenu menuToggle={toggleFunction} />
      </BrowserRouter>
    );

    const links = screen.getAllByRole('listitem');

    expect(links.length).toEqual(8);
  });
});
