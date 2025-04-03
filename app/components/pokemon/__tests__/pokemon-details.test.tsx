import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { PokemonDetails } from '../pokemon-details';

describe('PokemonDetails', () => {
  const mockProps = {
    height: 7,
    weight: 69,
    baseExperience: 64
  };

  it('renders pokemon details correctly', () => {
    render(<PokemonDetails {...mockProps} />);
    
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Height:')).toBeInTheDocument();
    expect(screen.getByText('Weight:')).toBeInTheDocument();
    expect(screen.getByText('Base Experience:')).toBeInTheDocument();
  });

  it('converts height to meters correctly', () => {
    render(<PokemonDetails {...mockProps} />);
    expect(screen.getByText('0.7m', { exact: false })).toBeInTheDocument();
  });

  it('converts weight to kilograms correctly', () => {
    render(<PokemonDetails {...mockProps} />);
    expect(screen.getByText('6.9kg', { exact: false })).toBeInTheDocument();
  });

  it('displays base experience value', () => {
    render(<PokemonDetails {...mockProps} />);
    expect(screen.getByText('64', { exact: false })).toBeInTheDocument();
  });
});