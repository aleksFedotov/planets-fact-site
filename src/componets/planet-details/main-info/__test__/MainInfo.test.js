import { render, screen } from '@testing-library/react';

import Data from '../../../../data.json';

import MainInfo from '../MainInfo';

describe('MainInfo compontets testing', () => {
  const mercuryData = Data.find((planet) => planet.name === 'Mercury');
  const marsData = Data.find((planet) => planet.name === 'Mars');

  test('Rendering right planet name', () => {
    const { rerender } = render(
      <MainInfo
        name={mercuryData.name}
        content={mercuryData['overview'].content}
        link={mercuryData['overview'].source}
      />
    );

    let planetName = screen.getByRole('heading', { level: 1 });

    expect(planetName).toHaveTextContent(/mercury/i);

    rerender(
      <MainInfo
        name={marsData.name}
        content={marsData['overview'].content}
        link={marsData['overview'].source}
      />
    );

    planetName = screen.getByRole('heading', { level: 1 });

    expect(planetName).toHaveTextContent(/mars/i);
  });

  test('Rendering right content based on controller and planet', () => {
    const { rerender } = render(
      <MainInfo
        name={mercuryData.name}
        content={mercuryData['overview'].content}
        link={mercuryData['overview'].source}
      />
    );

    let context = screen.getByTestId('text');

    expect(context).toHaveTextContent(mercuryData['overview'].content);

    rerender(
      <MainInfo
        name={mercuryData.name}
        content={mercuryData['structure'].content}
        link={mercuryData['structure'].source}
      />
    );

    context = screen.getByTestId('text');

    expect(context).toHaveTextContent(mercuryData['structure'].content);

    rerender(
      <MainInfo
        name={marsData.name}
        content={marsData['overview'].content}
        link={marsData['overview'].source}
      />
    );

    context = screen.getByTestId('text');

    expect(context).toHaveTextContent(marsData['overview'].content);
  });

  test('Rendering right link based on controller and planet', () => {
    const { rerender } = render(
      <MainInfo
        name={mercuryData.name}
        content={mercuryData['overview'].content}
        link={mercuryData['overview'].source}
      />
    );

    let link = screen.getByText('Wikipedia');
    console.log(link);

    expect(link).toHaveAttribute('href', mercuryData['overview'].source);

    rerender(
      <MainInfo
        name={mercuryData.name}
        content={mercuryData['structure'].content}
        link={mercuryData['structure'].source}
      />
    );

    link = screen.getByText('Wikipedia');

    expect(link).toHaveAttribute('href', mercuryData['structure'].source);

    rerender(
      <MainInfo
        name={marsData.name}
        content={marsData['overview'].content}
        link={marsData['overview'].source}
      />
    );

    link = screen.getByText('Wikipedia');

    expect(link).toHaveAttribute('href', marsData['overview'].source);
  });
});
