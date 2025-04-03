import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { PokemonAbilities } from '../pokemon-abilities';

describe('PokemonAbilities', () => {
  const mockAbilities = [
    { ability: { name: 'static', url: '' }, is_hidden: false, slot: 1 },
    { ability: { name: 'lightning-rod', url: '' }, is_hidden: true, slot: 2 }
  ];

  it('renders abilities section with title', () => {
    render(<PokemonAbilities abilities={mockAbilities} />);
    expect(screen.getByText('Abilities')).toBeInTheDocument();
  });

  it('renders all abilities correctly', () => {
    render(<PokemonAbilities abilities={mockAbilities} />);
    expect(screen.getByText('static')).toBeInTheDocument();
    expect(screen.getByText('lightning-rod')).toBeInTheDocument();
  });

  it('indicates hidden abilities', () => {
    render(<PokemonAbilities abilities={mockAbilities} />);
    expect(screen.getByText('(Hidden)')).toBeInTheDocument();
  });

  it('returns null when abilities array is empty', () => {
    const { container } = render(<PokemonAbilities abilities={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});