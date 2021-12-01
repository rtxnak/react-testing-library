import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const pikachuPath = '/pokemons/25';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do Pokémon selecionado aparecem na tela', () => {
    const { history } = renderWithRouter(<App />);
    history.push(pikachuPath);

    const nameDetails = screen.getByText('Pikachu Details');
    expect(nameDetails).toBeDefined();

    const summary = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(summary).toBeDefined();

    const paragraph = /This intelligent Pokémon roasts hard berries with electricity.../i;
    const summaryParagraph = screen.getByText(paragraph);
    expect(summaryParagraph).toBeInTheDocument();
  });

  it('Teste se existe uma seção com mapas com as localizações do pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push(pikachuPath);

    const pokemonLocationTitle = screen
      .getByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
    expect(pokemonLocationTitle).toBeDefined();

    const locationOne = screen.getByText('Kanto Viridian Forest');
    const locationTwo = screen.getByText('Kanto Power Plant');

    expect(locationOne).toBeDefined();
    expect(locationTwo).toBeDefined();

    const imageLocation = screen.getAllByAltText('Pikachu location');
    expect(imageLocation[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imageLocation[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Teste se o usuário pode favoritar um pokémon através da página de detalhes.',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push(pikachuPath);

      const checkFavotitePokemon = screen
        .getByRole('checkbox', { name: 'Pokémon favoritado?' });

      userEvent.click(checkFavotitePokemon);
      expect(checkFavotitePokemon).toBeDefined();
    });
});

// const pokemon = {
//   id: 25,
//   name: 'Pikachu',
//   type: 'Electric',
//   averageWeight: {
//     value: '6.0',
//     measurementUnit: 'kg',
//   },
//   image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
//   moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
//   foundAt: [
//     {
//       location: 'Kanto Viridian Forest',
//       map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
//     },
//     {
//       location: 'Kanto Power Plant',
//       map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
//     },
//   ],
//   summary: 'This intelligent Pokémon ...',
// };
