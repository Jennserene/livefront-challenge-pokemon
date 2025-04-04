import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { Pokedex } from '../pokedex';
import { MemoryRouter } from 'react-router';

jest.mock('../pokedex-list', () => ({
  PokedexList: ({ limit, offset }: { limit: number; offset: number }) => (
    <div data-testid="pokedex-list" data-limit={limit} data-offset={offset}>
      Mocked PokedexList
    </div>
  ),
}));

jest.mock('../../components/ui/header', () => ({
  Header: ({ title }: { title: string }) => (
    <header data-testid="header">
      <h1>{title}</h1>
    </header>
  ),
}));

describe('Pokedex', () => {
  const renderPokedex = () => {
    return render(
      <MemoryRouter>
        <Pokedex />
      </MemoryRouter>
    );
  };

  it('renders the main layout correctly', () => {
    renderPokedex();
    const main = screen.getByRole('main');
    expect(main).toHaveClass('flex', 'flex-col', 'items-center', 'pt-8', 'pb-4');
  });

  it('renders the header with correct title', () => {
    renderPokedex();
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(screen.getByText('Pokédex')).toBeInTheDocument();
  });

  it('renders PokedexList with correct props', () => {
    renderPokedex();
    const pokedexList = screen.getByTestId('pokedex-list');
    expect(pokedexList).toBeInTheDocument();
    expect(pokedexList).toHaveAttribute('data-limit', '151');
    expect(pokedexList).toHaveAttribute('data-offset', '0');
  });

  it('applies correct container classes for responsive layout', () => {
    renderPokedex();
    const container = screen.getByRole('main').firstElementChild;
    expect(container).toHaveClass(
      'flex-1',
      'flex',
      'flex-col',
      'items-center',
      'gap-8',
      'min-h-0',
      'w-full',
      'max-w-7xl'
    );
  });
});