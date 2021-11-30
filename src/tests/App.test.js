import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('1 - Teste o componente <App.js />', () => {
  it('(A)-Teste se o topo da aplicação contém um conjunto de links de navegação', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    const about = screen.getByRole('link', { name: 'About' });
    const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(home).toBeDefined();
    expect(about).toBeDefined();
    expect(favoritePokemons).toBeDefined();
  });

  it(
    '(B)-Test se a aplicação é redirecionada para URL / ao clicar no link Home,', () => {
      const { history } = renderWithRouter(<App />);
      const home = screen.getByRole('link', { name: 'Home' });

      userEvent.click(home);
      expect(history.location.pathname).toBe('/');
    },
  );

  it(
    '(C)-Test se a app.  é redirecionada para URL /about ao clicar no link About', () => {
      const { history } = renderWithRouter(<App />);
      const about = screen.getByRole('link', { name: 'About' });

      userEvent.click(about);
      expect(history.location.pathname).toBe('/about');
    },
  );
});
