import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { PokemonTypeFlag } from '../pokemon-type-flag';

describe('PokemonTypeFlag', () => {
  it('renders type name correctly', () => {
    render(<PokemonTypeFlag type="fire" size="md" />);
    expect(screen.getByText('fire')).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { container: smallContainer } = render(<PokemonTypeFlag type="water" size="sm" />);
    expect(smallContainer.firstChild).toHaveClass('px-2 py-0.5 text-xs');

    const { container: mediumContainer } = render(<PokemonTypeFlag type="grass" size="md" />);
    expect(mediumContainer.firstChild).toHaveClass('px-3 py-1 text-sm');

    const { container: largeContainer } = render(<PokemonTypeFlag type="electric" size="lg" />);
    expect(largeContainer.firstChild).toHaveClass('px-4 py-1.5 text-base');
  });

  it('applies correct type-specific background color', () => {
    const { container } = render(<PokemonTypeFlag type="fire" size="md" />);
    expect(container.firstChild).toHaveClass('bg-red-400 dark:bg-red-600');
  });

  it('capitalizes type name', () => {
    render(<PokemonTypeFlag type="psychic" size="md" />);
    const typeText = screen.getByText('psychic');
    expect(typeText).toHaveClass('capitalize');
  });
});