import React from 'react';
import type { PokemonType } from '../types/pokemon';
import { PokemonTypeFlag } from '../components/pokemon/pokemon-type-flag';

interface PokemonTypesProps {
  types: PokemonType[];
}

export function PokemonTypes({ types }: PokemonTypesProps) {
  if (!types || types.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Types</h2>
      <div className="flex flex-wrap gap-2">
        {types.map((typeInfo) => (
          <PokemonTypeFlag
            key={typeInfo.type.name}
            type={typeInfo.type.name}
            size="md"
          />
        ))}
      </div>
    </div>
  );
}
