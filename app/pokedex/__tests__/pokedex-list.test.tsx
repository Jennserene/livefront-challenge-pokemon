import React from 'react';
import { render, screen, waitFor } from '~/utils/test/test-utils';
import { PokedexList } from '../pokedex-list';
import { getPokemonList } from '../../api/pokedex-api';
import { MemoryRouter } from 'react-router';

jest.mock('../../api/pokedex-api');

describe('PokedexList', () => {
  const mockPokemonList = {
    results: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' }
    ]
  };

  beforeEach(() => {
    (getPokemonList as jest.Mock).mockReset();
  });

  it('shows loading state initially', () => {
    (getPokemonList as jest.Mock).mockImplementation(() => new Promise(() => {}));
    
    render(
      <MemoryRouter>
        <PokedexList />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders pokemon list when data is loaded', async () => {
    (getPokemonList as jest.Mock).mockResolvedValue(mockPokemonList);
    
    render(
      <MemoryRouter>
        <PokedexList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('Charmander')).toBeInTheDocument();
    });
  });

  it('shows error message when API call fails', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    (getPokemonList as jest.Mock).mockRejectedValue(new Error('API Error'));
    
    render(
      <MemoryRouter>
        <PokedexList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/failed to load pokemon/i)).toBeInTheDocument();
    });

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('respects limit and offset props', async () => {
    (getPokemonList as jest.Mock).mockResolvedValue(mockPokemonList);
    
    render(
      <MemoryRouter>
        <PokedexList limit={10} offset={20} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getPokemonList).toHaveBeenCalledWith(10, 20);
    });
  });
});
