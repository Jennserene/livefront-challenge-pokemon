import React from 'react';
import { render } from '~/utils/test/test-utils';
import { ProgressBar } from '../progress-bar';

describe('ProgressBar', () => {
  it('renders with default props', () => {
    const { container } = render(<ProgressBar value={50} />);
    const progressBar = container.firstChild;
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveAttribute('aria-valuemax', '255');
    expect(progressBar).toHaveAttribute('aria-label', 'Progress: 50 out of 255');
  });

  it('respects custom maxValue', () => {
    const { container } = render(<ProgressBar value={50} maxValue={100} />);
    const progressBar = container.firstChild;
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    expect(progressBar).toHaveAttribute('aria-label', 'Progress: 50 out of 100');
  });

  it('caps at maxValue', () => {
    const { container } = render(<ProgressBar value={300} maxValue={100} />);
    const progressBar = container.firstChild;
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    expect(progressBar).toHaveAttribute('aria-label', 'Progress: 100 out of 100');
  });

  it('applies custom className', () => {
    const { container } = render(<ProgressBar value={50} className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('applies custom barClassName', () => {
    const { container } = render(<ProgressBar value={50} barClassName="test-bar-class" />);
    const progressBar = container.firstChild?.firstChild;
    expect(progressBar).toHaveClass('test-bar-class');
  });

  describe('accessibility', () => {
    it('has correct ARIA attributes', () => {
      const { container } = render(<ProgressBar value={50} maxValue={100} />);
      const progressBar = container.firstChild;
      
      expect(progressBar).toHaveAttribute('role', 'progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '50');
      expect(progressBar).toHaveAttribute('aria-valuemin', '0');
      expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    });

    it('includes label in aria-label when provided', () => {
      const { container } = render(
        <ProgressBar value={50} maxValue={100} label="Attack" />
      );
      expect(container.firstChild).toHaveAttribute(
        'aria-label',
        'Attack: 50 out of 100'
      );
    });

    it('uses default label when none provided', () => {
      const { container } = render(
        <ProgressBar value={50} maxValue={100} />
      );
      expect(container.firstChild).toHaveAttribute(
        'aria-label',
        'Progress: 50 out of 100'
      );
    });
  });
});
