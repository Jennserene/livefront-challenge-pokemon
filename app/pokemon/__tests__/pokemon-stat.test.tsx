import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { PokemonStat } from '../pokemon-stat';

describe('PokemonStat', () => {
  it('renders stat name and value', () => {
    render(<PokemonStat name="special-attack" value={65} />);
    
    expect(screen.getByText('special attack')).toBeInTheDocument();
    expect(screen.getByText('65')).toBeInTheDocument();
  });

  it('capitalizes and formats stat name', () => {
    render(<PokemonStat name="special-defense" value={80} />);
    expect(screen.getByText('special defense')).toBeInTheDocument();
  });

  it('renders progress bar', () => {
    const { container } = render(<PokemonStat name="hp" value={45} />);
    expect(container.querySelector('.bg-gray-200')).toBeInTheDocument();
    expect(container.querySelector('.bg-blue-600')).toBeInTheDocument();
  });
});