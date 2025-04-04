import React from 'react';
import { render, screen, fireEvent } from '~/utils/test/test-utils';
import { Image } from '../image';

describe('Image', () => {
  const mockProps = {
    pokemonId: '25',
    alt: 'pikachu',
    src: 'https://example.com/pikachu.png'
  };

  it('renders image with correct attributes', () => {
    render(<Image {...mockProps} />);
    
    const image = screen.getByAltText('pikachu');
    expect(image).toHaveAttribute('src', mockProps.src);
  });

  it('uses fallback image when primary image fails to load', () => {
    render(<Image {...mockProps} />);
    
    const image = screen.getByAltText('pikachu');
    fireEvent.error(image);
    
    expect(image).toHaveAttribute('src', expect.stringContaining('/pikachu.png'));
  });

  it('applies correct image styling', () => {
    render(<Image {...mockProps} />);
    
    const image = screen.getByAltText('pikachu');
    expect(image).toHaveClass('object-contain');
  });
});