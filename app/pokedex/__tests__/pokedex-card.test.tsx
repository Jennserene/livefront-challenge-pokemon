import React from 'react';
import { render, screen, fireEvent } from '~/utils/test/test-utils';
import { PokedexCard } from '../pokedex-card';
import { MemoryRouter } from 'react-router';

describe('PokedexCard', () => {
  const mockProps = {
    id: '1',
    name: 'bulbasaur',
    types: [
      { type: { name: 'grass', url: '' }, slot: 1 },
      { type: { name: 'poison', url: '' }, slot: 2 }
    ]
  };

  const renderWithRouter = (component: React.ReactNode) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  it('renders basic pokemon information', () => {
    renderWithRouter(<PokedexCard {...mockProps} />);
    
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
  });

  it('renders pokemon types when provided', () => {
    renderWithRouter(<PokedexCard {...mockProps} />);
    
    expect(screen.getByText('grass')).toBeInTheDocument();
    expect(screen.getByText('poison')).toBeInTheDocument();
  });

  it('links to the correct pokemon detail page', () => {
    renderWithRouter(<PokedexCard {...mockProps} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/pokemon/1');
  });

  it('handles image loading errors by using fallback image', () => {
    renderWithRouter(<PokedexCard {...mockProps} />);
    
    const image = screen.getByAltText('bulbasaur');
    fireEvent.error(image);
    
    expect(image).toHaveAttribute('src', expect.stringContaining('/1.png'));
  });
});