import React from "react";
import type { PokemonStat } from '../types/pokemon';

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
          <li key={statInfo.stat.name}>
            <div className="flex justify-between mb-1">
              <span className="capitalize">{statInfo.stat.name.replace('-', ' ')}</span>
              <span>{statInfo.base_stat}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${Math.min(100, (statInfo.base_stat / 255) * 100)}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
