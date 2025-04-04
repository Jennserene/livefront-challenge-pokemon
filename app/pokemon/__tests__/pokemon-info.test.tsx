import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { PokemonInfo } from '../pokemon-info';

describe('PokemonInfo', () => {
  const mockProps = {
    name: 'pikachu',
    id: 25
  };

  it('renders pokemon name and ID correctly', () => {
    render(<PokemonInfo {...mockProps} />);
    
    expect(screen.getByText('pikachu', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('#25', { exact: false })).toBeInTheDocument();
  });

  it('capitalizes pokemon name', () => {
    render(<PokemonInfo {...mockProps} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('pikachu');
  });

  it('applies correct styling classes', () => {
    render(<PokemonInfo {...mockProps} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-3xl', 'font-bold', 'mt-4', 'capitalize');
  });
});