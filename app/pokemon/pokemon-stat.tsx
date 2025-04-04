import React from 'react';
import { ProgressBar } from '../components/ui/progress-bar';

interface PokemonStatProps {
  name: string;
  value: number;
}

export function PokemonStat({ name, value }: PokemonStatProps) {
  const formattedName = name.replace('-', ' ');

  return (
    <li>
      <div className="flex justify-between mb-1">
        <span className="capitalize">{formattedName}</span>
        <span>{value}</span>
      </div>
      <ProgressBar 
        value={value} 
        label={formattedName}
      />
    </li>
  );
}
