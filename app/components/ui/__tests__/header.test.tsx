import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { Header } from '../header';

describe('Header', () => {
  it('renders with default title', () => {
    render(<Header />);
    expect(screen.getByText('Pokédex')).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    render(<Header title="Custom Title" />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('renders the Pokemon logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('International Pokemon Logo');
    expect(logo).toBeInTheDocument();
  });

  it('applies correct styling to the container', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('flex', 'flex-col', 'items-center', 'gap-4');
  });

  it('applies correct styling to the logo container', () => {
    render(<Header />);
    const logoContainer = screen.getByRole('img').parentElement;
    expect(logoContainer).toHaveClass('w-[300px]', 'max-w-[100vw]', 'p-4');
  });

  it('applies correct styling to the title', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveClass('text-3xl', 'font-bold');
  });
});