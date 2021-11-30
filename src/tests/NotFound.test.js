import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { NotFound } from '../components';
import renderWithRouter from './renderWithRouter';

describe('4-Teste o componente <NotFound.js />', () => {
  it('(A)-Teste se página contém um h2 com o "texto Page requested not found"', () => {
    renderWithRouter(<NotFound />);
    const text = screen.getByText('Page requested not found');
    expect(text).toBeDefined();
  });
  it('(B)-Teste se página mostra o emoji', () => {
    renderWithRouter(<NotFound />);
    const image = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
