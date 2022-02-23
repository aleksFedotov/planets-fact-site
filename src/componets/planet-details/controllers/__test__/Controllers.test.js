import { render, screen } from '@testing-library/react';

import Controllers from '../Controllers';

const planetData = {
  name: 'Mercury',
};

describe('Contollers component testing', () => {
  test('All 3 controlers are rendered', () => {
    render(
      <Controllers
        planet={planetData.name}
        changeView={jest.fn()}
        currentView={'overview'}
        width={1440}
      />
    );

    const tabs = screen.getAllByRole('button');
    expect(tabs.length).toBe(3);
  });

  test('Tabs name with witdh more then 700 px', () => {
    render(
      <Controllers
        planet={planetData.name}
        changeView={jest.fn()}
        currentView={'overview'}
        width={1440}
      />
    );

    const overview = screen.getByText(/overview/i);
    const structure = screen.getByText(/internal structure/i);
    const surface = screen.getByText(/surface geology/i);

    expect(overview).toBeInTheDocument();
    expect(structure).toBeInTheDocument();
    expect(surface).toBeInTheDocument();
  });

  test('Tabs name with witdh less then 700 px', () => {
    render(
      <Controllers
        planet={planetData.name}
        changeView={jest.fn()}
        currentView={'overview'}
        width={600}
      />
    );

    const overview = screen.getByText(/overview/i);
    const structure = screen.getByText(/structure/i);
    const surface = screen.getByText(/surface/i);

    expect(overview).toBeInTheDocument();
    expect(structure).toBeInTheDocument();
    expect(surface).toBeInTheDocument();
  });
});
