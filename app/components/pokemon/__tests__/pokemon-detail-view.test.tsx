import React from 'react';
import { render, screen, waitFor } from '~/utils/test/test-utils';
import { PokemonDetailView } from '../pokemon-detail-view';
import { getPokemonDetail } from '../../../api/pokedex-api';
import { MemoryRouter } from 'react-router';
import * as router from 'react-router';

// Mock the API call
jest.mock('../../../api/pokedex-api');
// Mock useParams
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: jest.fn(),
}));

describe('PokemonDetailView', () => {
  const mockPokemonDetail = {
    id: 25,
    name: 'pikachu',
    height: 4,
    weight: 60,
    sprites: {
      front_default: 'pikachu.png',
      other: {
        'official-artwork': {
          front_default: 'pikachu-official.png'
        }
      }
    },
    types: [{ type: { name: 'electric', url: '' }, slot: 1 }],
    abilities: [{ ability: { name: 'static', url: '' }, is_hidden: false, slot: 1 }],
    stats: [{ base_stat: 55, stat: { name: 'hp', url: '' } }],
    base_experience: 112,
    species: { name: 'pikachu', url: '' }
  };

  beforeEach(() => {
    (getPokemonDetail as jest.Mock).mockReset();
    // Mock useParams to return an id
    jest.spyOn(router, 'useParams').mockReturnValue({ id: '25' });
  });

  it('shows loading state initially', () => {
    (getPokemonDetail as jest.Mock).mockImplementation(() => new Promise(() => {}));
    
    render(
      <MemoryRouter>
        <PokemonDetailView />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders pokemon details when data is loaded', async () => {
    (getPokemonDetail as jest.Mock).mockResolvedValue(mockPokemonDetail);
    
    render(
      <MemoryRouter>
        <PokemonDetailView />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('pikachu', { exact: false })).toBeInTheDocument();
      expect(screen.getByText('electric')).toBeInTheDocument();
      expect(screen.getByText('static')).toBeInTheDocument();
    });
  });

  it('shows error message when API call fails', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    (getPokemonDetail as jest.Mock).mockRejectedValue(new Error('API Error'));
    
    render(
      <MemoryRouter>
        <PokemonDetailView />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/failed to load pokemon/i)).toBeInTheDocument();
    });

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
