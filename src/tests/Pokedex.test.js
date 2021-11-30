import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  it('(A)-Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const title = screen
      .getByRole('heading', { level: 2, name: /Encountered pokémons/ });
    expect(title).toBeDefined();
  });

  it('(B)Teste se é exibido o próximo Pokémon quando o Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    const nextPokemonButton = screen.getByRole('button', { name: 'Próximo pokémon' });
    userEvent.click(nextPokemonButton);
    expect(screen.getByText('Charmander')).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    expect(screen.getByText('Caterpie')).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    expect(screen.getByText('Ekans')).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    expect(screen.getByText('Alakazam')).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    expect(screen.getByText('Mew')).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    expect(screen.getByText('Rapidash')).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    expect(screen.getByText('Snorlax')).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    expect(screen.getByText('Dragonair')).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });

  it('(C)Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);
    const pokemonOnScreen = screen.getAllByTestId('pokemon-name');
    expect(pokemonOnScreen.length).toStrictEqual(1);
  });

  it('(D)Teste se a Pokédex tem os botões de filtro', () => {
    const pokemonTypes = [
      'Electric',
      'Fire',
      'Bug',
      'Poison',
      'Psychic',
      'Normal',
      'Dragon',
    ];

    renderWithRouter(<App />);
    pokemonTypes.forEach((type) => {
      const pokemonTypeButton = screen.getByRole('button', { name: `${type}` });
      expect(pokemonTypeButton).toBeDefined();
    });

    pokemonTypes.forEach((type) => {
      const pokemonTypeButton = screen.getByRole('button', { name: `${type}` });
      userEvent.click(pokemonTypeButton);
      const typeOfPokemonOnScreen = screen.getAllByText(`${type}`);
      expect(typeOfPokemonOnScreen).toBeDefined();
    });

    const allButton = screen.getByRole('button', { name: 'All' });
    expect(allButton).toBeDefined();
  });
});
