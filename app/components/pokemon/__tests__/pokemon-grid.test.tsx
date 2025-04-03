import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { PokemonGrid } from '../pokemon-grid';
import { MemoryRouter } from 'react-router';
import type { PokemonDetail, PokemonListItem } from '~/types/pokemon';

describe('PokemonGrid', () => {
  const mockPokemon = [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' }
  ] as PokemonListItem[];

  const mockPokemonDetails = {
    '1': {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 70,
      sprites: {
        front_default: 'bulbasaur.png',
        front_shiny: 'bulbasaur-shiny.png',
        back_default: 'bulbasaur-back.png',
        back_shiny: 'bulbasaur-back-shiny.png',
        other: {
          'official-artwork': {
            front_default: 'bulbasaur-official.png'
          }
        }
      },
      types: [{ type: { name: 'grass', url: '' }, slot: 1 }],
      stats: [
        { base_stat: 45, effort: 0, stat: { name: 'hp', url: '' } }
      ],
      abilities: [
        { ability: { name: 'overgrow', url: '' }, is_hidden: false, slot: 1 }
      ],
      base_experience: 64,
      species: { name: 'bulbasaur', url: '' }
    },
    '4': {
      id: 4,
      name: 'charmander',
      height: 6,
      weight: 85,
      sprites: {
        front_default: 'charmander.png',
        front_shiny: 'charmander-shiny.png',
        back_default: 'charmander-back.png',
        back_shiny: 'charmander-back-shiny.png',
        other: {
          'official-artwork': {
            front_default: 'charmander-official.png'
          }
        }
      },
      types: [{ type: { name: 'fire', url: '' }, slot: 1 }],
      stats: [
        { base_stat: 39, effort: 0, stat: { name: 'hp', url: '' } }
      ],
      abilities: [
        { ability: { name: 'blaze', url: '' }, is_hidden: false, slot: 1 }
      ],
      base_experience: 62,
      species: { name: 'charmander', url: '' }
    }
  } as Record<string, PokemonDetail>;

  it('renders grid of pokemon cards', () => {
    render(
      <MemoryRouter>
        <PokemonGrid pokemon={mockPokemon} pokemonDetails={mockPokemonDetails} />
      </MemoryRouter>
    );

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Charmander')).toBeInTheDocument();
  });

  it('renders grid with correct layout classes', () => {
    const { container } = render(
      <MemoryRouter>
        <PokemonGrid pokemon={mockPokemon} pokemonDetails={mockPokemonDetails} />
      </MemoryRouter>
    );

    const grid = container.firstChild;
    expect(grid).toHaveClass(
      'grid',
      'grid-cols-2',
      'sm:grid-cols-3',
      'md:grid-cols-4',
      'lg:grid-cols-5',
      'gap-4',
      'p-4',
      'w-full'
    );
  });

  it('shows "No Pokemon found" message when pokemon list is empty', () => {
    render(
      <MemoryRouter>
        <PokemonGrid pokemon={[]} pokemonDetails={{}} />
      </MemoryRouter>
    );

    expect(screen.getByText('No Pokemon found.')).toBeInTheDocument();
  });
});
