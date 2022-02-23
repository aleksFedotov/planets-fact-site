import { render, screen } from '@testing-library/react';

import Image from '../Image';

describe('Image component testing', () => {
  test('Rendering rigth image based on controller', () => {
    const { rerender } = render(
      <Image planet={'Mercury'} controller={'overview'} geo={false} />
    );

    const overview = screen.getByAltText('overview');

    expect(overview).toBeInTheDocument();

    rerender(<Image planet={'Mercury'} controller={'structure'} geo={false} />);
    const structure = screen.getByAltText('structure');

    expect(structure).toBeInTheDocument();

    rerender(<Image planet={'Mercury'} controller={'surface'} geo={false} />);
    const surface = screen.getByAltText('surface');

    expect(surface).toBeInTheDocument();
  });
});
