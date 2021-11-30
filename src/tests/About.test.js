import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { About } from '../components';
import renderWithRouter from './renderWithRouter';

describe('2 - Teste o componente <About.js />.', () => {
  // it('(A)-Teste se a página contém as informações sobre a Pokédex', () => {
  //   renderWithRouter(<About />);
  // });

  it('(B)-Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const aboutPokedex = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(aboutPokedex).toBeDefined();
  });

  it('(C)-Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const paragraphs = screen.getAllByText(/pokémons/i);
    expect(paragraphs.length).toBe(2);
  });

  it('(D)-Teste se a página contém uma certa imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
