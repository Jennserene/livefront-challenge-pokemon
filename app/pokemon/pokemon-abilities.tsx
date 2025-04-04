import React from "react";
import type { PokemonAbility } from '../types/pokemon';

interface PokemonAbilitiesProps {
  abilities: PokemonAbility[];
}

export function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
  if (!abilities || abilities.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Abilities</h2>
      <ul className="space-y-1 text-gray-800 dark:text-gray-200">
        {abilities.map((abilityInfo) => (
          <li key={abilityInfo.ability.name} className="capitalize">
            {abilityInfo.ability.name}
            {abilityInfo.is_hidden && <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">(Hidden)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
