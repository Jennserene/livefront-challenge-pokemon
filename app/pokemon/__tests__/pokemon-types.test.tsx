import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { PokemonTypes } from '../pokemon-types';

describe('PokemonTypes', () => {
  const mockTypes = [
    { type: { name: 'electric', url: '' }, slot: 1 },
    { type: { name: 'flying', url: '' }, slot: 2 }
  ];

  it('renders types section with title', () => {
    render(<PokemonTypes types={mockTypes} />);
    expect(screen.getByText('Types')).toBeInTheDocument();
  });

  it('renders all type flags correctly', () => {
    render(<PokemonTypes types={mockTypes} />);
    expect(screen.getByText('electric')).toBeInTheDocument();
    expect(screen.getByText('flying')).toBeInTheDocument();
  });

  it('returns null when types array is empty', () => {
    const { container } = render(<PokemonTypes types={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});