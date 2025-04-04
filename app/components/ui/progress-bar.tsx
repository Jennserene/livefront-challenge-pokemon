import React from 'react';

interface ProgressBarProps {
  value: number;
  maxValue?: number;
  className?: string;
  barClassName?: string;
  label?: string;
}

export function ProgressBar({
  value,
  maxValue = 255,
  className = '',
  barClassName = 'bg-blue-600',
  label
}: ProgressBarProps) {
  const clampedValue = Math.min(value, maxValue);
  const percentage = Math.min(100, (clampedValue / maxValue) * 100);
  const ariaLabel = label || 'Progress';

  return (
    <div
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={maxValue}
      aria-label={`${ariaLabel}: ${clampedValue} out of ${maxValue}`}
      className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 ${className}`}
    >
      <div
        className={`${barClassName} h-2 rounded-full`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
