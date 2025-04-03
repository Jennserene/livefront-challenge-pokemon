import React from 'react';

const typeColors: Record<string, { background: string; text: string }> = {
  normal: { background: 'bg-gray-300 dark:bg-gray-500', text: 'text-gray-800 dark:text-gray-100' },
  fire: { background: 'bg-red-400 dark:bg-red-600', text: 'text-white' },
  water: { background: 'bg-blue-400 dark:bg-blue-600', text: 'text-white' },
  electric: { background: 'bg-yellow-300 dark:bg-yellow-500', text: 'text-yellow-900 dark:text-yellow-100' },
  grass: { background: 'bg-green-400 dark:bg-green-600', text: 'text-white' },
  ice: { background: 'bg-blue-200 dark:bg-blue-400', text: 'text-blue-900 dark:text-blue-100' },
  fighting: { background: 'bg-red-600 dark:bg-red-800', text: 'text-white' },
  poison: { background: 'bg-purple-500 dark:bg-purple-700', text: 'text-white' },
  ground: { background: 'bg-yellow-600 dark:bg-yellow-800', text: 'text-white' },
  flying: { background: 'bg-indigo-300 dark:bg-indigo-500', text: 'text-indigo-900 dark:text-indigo-100' },
  psychic: { background: 'bg-pink-400 dark:bg-pink-600', text: 'text-white' },
  bug: { background: 'bg-green-500 dark:bg-green-700', text: 'text-white' },
  rock: { background: 'bg-yellow-700 dark:bg-yellow-900', text: 'text-white' },
  ghost: { background: 'bg-purple-600 dark:bg-purple-800', text: 'text-white' },
  dragon: { background: 'bg-indigo-600 dark:bg-indigo-800', text: 'text-white' },
  dark: { background: 'bg-gray-700 dark:bg-gray-900', text: 'text-white' },
  steel: { background: 'bg-gray-400 dark:bg-gray-600', text: 'text-white' },
  fairy: { background: 'bg-pink-300 dark:bg-pink-500', text: 'text-pink-900 dark:text-pink-100' },
  default: { background: 'bg-blue-100 dark:bg-blue-300', text: 'text-blue-800 dark:text-blue-100' }
};

export interface PokemonTypeFlagProps {
  type: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PokemonTypeFlag({ type, size = 'md', className = '' }: PokemonTypeFlagProps) {
  const typeColor = typeColors[type.toLowerCase()] || typeColors.default;

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  return (
    <span
      className={`${typeColor.background} ${typeColor.text} ${sizeClasses[size]} rounded-full capitalize font-medium ${className}`}
    >
      {type}
    </span>
  );
}
