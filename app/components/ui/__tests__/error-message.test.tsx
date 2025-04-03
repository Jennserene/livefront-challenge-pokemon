
import React from 'react';
import { render, screen, fireEvent } from '~/utils/test/test-utils';
import { ErrorMessage } from '../error-message';
import { MemoryRouter } from 'react-router';

describe('ErrorMessage', () => {
  const renderWithRouter = (component: React.ReactNode) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  it('renders error message correctly', () => {
    const message = 'Something went wrong';
    renderWithRouter(<ErrorMessage message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('renders retry button when onRetry prop is provided', () => {
    const handleRetry = jest.fn();
    renderWithRouter(<ErrorMessage message="Error" onRetry={handleRetry} />);
    
    const retryButton = screen.getByText('Retry');
    expect(retryButton).toBeInTheDocument();
    
    fireEvent.click(retryButton);
    expect(handleRetry).toHaveBeenCalledTimes(1);
  });

  it('does not render retry button when onRetry prop is not provided', () => {
    renderWithRouter(<ErrorMessage message="Error" />);
    expect(screen.queryByText('Retry')).not.toBeInTheDocument();
  });

  it('renders back link when backLink prop is provided', () => {
    renderWithRouter(
      <ErrorMessage 
        message="Error" 
        backLink="/test" 
        backLinkText="Go Back" 
      />
    );
    
    const backLink = screen.getByText('Go Back');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/test');
  });

  it('uses default back link text when backLinkText is not provided', () => {
    renderWithRouter(
      <ErrorMessage 
        message="Error" 
        backLink="/test" 
      />
    );
    
    expect(screen.getByText('Back to List')).toBeInTheDocument();
  });

  it('does not render back link when backLink prop is not provided', () => {
    renderWithRouter(<ErrorMessage message="Error" />);
    expect(screen.queryByText('Back to List')).not.toBeInTheDocument();
  });

  it('renders both retry button and back link when both props are provided', () => {
    const handleRetry = jest.fn();
    renderWithRouter(
      <ErrorMessage 
        message="Error" 
        onRetry={handleRetry}
        backLink="/test"
      />
    );
    
    expect(screen.getByText('Retry')).toBeInTheDocument();
    expect(screen.getByText('Back to List')).toBeInTheDocument();
  });

  it('applies error message styling', () => {
    renderWithRouter(<ErrorMessage message="Error" />);
    const messageContainer = screen.getByText('Error').closest('div');
    expect(messageContainer).toHaveClass('text-center', 'p-4', 'text-red-500');
  });

  it('applies button styling to retry button', () => {
    renderWithRouter(<ErrorMessage message="Error" onRetry={() => {}} />);
    const retryButton = screen.getByText('Retry');
    expect(retryButton).toHaveClass(
      'px-4',
      'py-2',
      'bg-blue-500',
      'text-white',
      'rounded',
      'hover:bg-blue-600'
    );
  });

  it('applies link styling to back link', () => {
    renderWithRouter(<ErrorMessage message="Error" backLink="/test" />);
    const backLink = screen.getByText('Back to List');
    expect(backLink).toHaveClass(
      'px-4',
      'py-2',
      'bg-blue-500',
      'text-white',
      'rounded',
      'hover:bg-blue-600',
      'inline-block'
    );
  });
});

