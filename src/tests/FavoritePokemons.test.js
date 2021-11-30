import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { FavoritePokemons } from '../components';
import renderWithRouter from './renderWithRouter';

describe('3 - Teste o componente <FavoritePokemons.js />', () => {
  it('(A)-É exibido No favorite pokemon found quando não há pokemon favorito', () => {
    renderWithRouter(<FavoritePokemons />);
    const text = screen.getByText(/No favorite pokemon found/);
    expect(text).toBeDefined();
  });

  it('(B)Teste se é exibido todos os cards de pokémons favoritados.', () => {
    const favPokemons = [
      {
        id: 25,
        name: 'Pikachu',
        type: 'Electric',
        averageWeight: {
          value: '6.0',
          measurementUnit: 'kg',
        },
        image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
        moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
        foundAt: [
          {
            location: 'Kanto Viridian Forest',
            map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
          },
          {
            location: 'Kanto Power Plant',
            map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
          },
        ],
        summary: 'This intelligent Pokémon ...',
      },
    ];

    renderWithRouter(<FavoritePokemons pokemons={ favPokemons } />);
    const pokemonsTestId = screen.getByText(/Pikachu/i);
    expect(pokemonsTestId).toBeDefined();
  });
});
