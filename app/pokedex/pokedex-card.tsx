import React from 'react';
import { Link } from 'react-router';
import { capitalizeFirstLetter, getPokemonImageUrl, getFallbackPokemonImageUrl } from '../utils/string';
import { PokemonTypeFlag } from '../components/pokemon/pokemon-type-flag';
import type { PokemonType } from '../types/pokemon';

interface PokedexCardProps {
  id: string;
  name: string;
  imageUrl?: string;
  types?: PokemonType[];
}

export function PokedexCard({ id, name, imageUrl, types = [] }: PokedexCardProps) {
  const primaryImageUrl = getPokemonImageUrl(id);
  const fallbackImageUrl = getFallbackPokemonImageUrl(id);

  return (
    <li>
      <Link
        to={`/pokemon/${id}`}
        className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 group"
      >
        <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
          <img
            src={imageUrl || primaryImageUrl}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== fallbackImageUrl) {
                target.src = fallbackImageUrl;
              }
            }}
          />
        </div>
        <div className="mt-2 w-full px-1 transition-all duration-300">
          <p className="text-xs text-left text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">#{id}</p>
          <p className="text-base font-medium text-left text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white">
            {capitalizeFirstLetter(name)}
          </p>
          {types.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {types.map((typeInfo) => (
                <PokemonTypeFlag
                  key={typeInfo.type.name}
                  type={typeInfo.type.name}
                  size="sm"
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
