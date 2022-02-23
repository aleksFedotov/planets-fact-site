import { render, screen } from '@testing-library/react';

import Data from '../../../../data.json';

import DetailInfo from '../DetailInfo';

describe('Detail Info Component testing', () => {
  test('All details rendering', () => {
    const mercuryData = Data.filter((planet) => planet.name === 'Mercury')[0];
    render(<DetailInfo planetInfo={mercuryData} />);

    const details = screen.getAllByRole('listitem');

    expect(details.length).toEqual(4);
  });

  test('Valid data for details', () => {
    const mercuryData = Data.filter((planet) => planet.name === 'Mercury')[0];
    const marsData = Data.filter((planet) => planet.name === 'Mars')[0];

    const { rerender } = render(<DetailInfo planetInfo={mercuryData} />);

    const rotationMerc = screen.getByText('58.6 Days');
    const revolutionMerc = screen.getByText('87.97 Days');
    const radiusMerc = screen.getByText('2,439.7 KM');
    const temperatureMerc = screen.getByText('430°c');

    expect(rotationMerc).toBeInTheDocument();
    expect(revolutionMerc).toBeInTheDocument();
    expect(radiusMerc).toBeInTheDocument();
    expect(temperatureMerc).toBeInTheDocument();

    rerender(<DetailInfo planetInfo={marsData} />);

    const rotationMars = screen.getByText('1.03 Days');
    const revolutionMars = screen.getByText('1.88 Years');
    const radiusMars = screen.getByText('3,389.5 KM');
    const temperatureMars = screen.getByText('-28°c');

    expect(rotationMars).toBeInTheDocument();
    expect(revolutionMars).toBeInTheDocument();
    expect(radiusMars).toBeInTheDocument();
    expect(temperatureMars).toBeInTheDocument();
  });
});
