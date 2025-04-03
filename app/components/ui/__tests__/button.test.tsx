import React from 'react';
import { render, screen } from '~/utils/test/test-utils';
import { Button } from '../button';
import { MemoryRouter } from 'react-router';

describe('LinkButton', () => {
  const renderWithRouter = (component: React.ReactNode) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  it('renders children correctly', () => {
    renderWithRouter(<Button to="/test">Link Text</Button>);
    expect(screen.getByText('Link Text')).toBeInTheDocument();
  });

  it('renders correct link with "to" prop', () => {
    renderWithRouter(<Button to="/test">Test Link</Button>);
    const link = screen.getByText('Test Link');
    expect(link.closest('a')).toHaveAttribute('href', '/test');
  });

  it('applies additional classOverrides when provided', () => {
    renderWithRouter(
      <Button to="/test" classOverrides="custom-class">Custom Link</Button>
    );
    const link = screen.getByText('Custom Link');
    expect(link).toHaveClass('custom-class');
  });

  it('includes base link classes', () => {
    renderWithRouter(<Button to="/test">Base Link</Button>);
    const link = screen.getByText('Base Link');
    expect(link).toHaveClass('rounded', 'font-medium', 'transition-colors', 'inline-block', 'bg-blue-500', 'text-white');
  });
});

