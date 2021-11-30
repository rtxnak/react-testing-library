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

  it(
    '(D)-Test se é redirecionada para /favorites ao clicar no Favorite Pokémons', () => {
      const { history } = renderWithRouter(<App />);
      const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });

      userEvent.click(favoritePokemons);
      expect(history.location.pathname).toBe('/favorites');
    },
  );

  it(
    '(E)-Teste se redireciona para pag NotFound ao entrar em URL desconhecida.', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/blankPageTest');

      const pageNotFound = screen.getByText('Page requested not found');
      expect(pageNotFound).toBeDefined();
    },
  );
});
