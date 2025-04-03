import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { PokemonStats } from '../pokemon-stats';
import type { PokemonStat } from '~/types/pokemon';

describe('PokemonStats', () => {
  const mockStats = [
    { base_stat: 45, stat: { name: 'hp', url: '' } },
    { base_stat: 49, stat: { name: 'attack', url: '' } },
    { base_stat: 50, stat: { name: 'defense', url: '' } }
  ] as PokemonStat[];

  it('renders stats section with title', () => {
    render(<PokemonStats stats={mockStats} />);
    expect(screen.getByText('Stats')).toBeInTheDocument();
  });

  it('renders all stats with correct values', () => {
    render(<PokemonStats stats={mockStats} />);
    
    expect(screen.getByText('hp')).toBeInTheDocument();
    expect(screen.getByText('45')).toBeInTheDocument();
    expect(screen.getByText('attack')).toBeInTheDocument();
    expect(screen.getByText('49')).toBeInTheDocument();
    expect(screen.getByText('defense')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('formats stat names correctly', () => {
    const statsWithHyphen = [
      { base_stat: 65, stat: { name: 'special-attack', url: '' } }
    ] as PokemonStat[];
    render(<PokemonStats stats={statsWithHyphen} />);
    expect(screen.getByText('special attack')).toBeInTheDocument();
  });

  it('returns null when stats array is empty', () => {
    const { container } = render(<PokemonStats stats={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});