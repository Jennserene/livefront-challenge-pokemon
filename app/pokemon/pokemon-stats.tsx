import React from "react";
import type { PokemonStat } from '../types/pokemon';
import { PokemonStat as PokemonStatComponent } from './pokemon-stat';

interface PokemonStatsProps {
  stats: PokemonStat[];
}

export function PokemonStats({ stats }: PokemonStatsProps) {
  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Stats</h2>
      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
        {stats.map((statInfo) => (
          <PokemonStatComponent
            key={statInfo.stat.name}
            name={statInfo.stat.name}
            value={statInfo.base_stat}
          />
        ))}
      </ul>
    </div>
  );
}
