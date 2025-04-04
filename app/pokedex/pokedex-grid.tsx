import React from "react";
import { PokedexCard } from './pokedex-card';
import type { PokemonListItem, PokemonDetail } from '../types/pokemon';
import { extractPokemonIdFromUrl } from '../utils/string';

interface PokedexGridProps {
  pokemon: PokemonListItem[];
  pokemonDetails?: Record<string, PokemonDetail>;
}

export function PokedexGrid({ pokemon, pokemonDetails = {} }: PokedexGridProps) {
  if (!pokemon || pokemon.length === 0) {
    return <p className="text-center">No Pokemon found.</p>;
  }

  return (
    <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 w-full">
      {pokemon.map((poke) => {
        const pokemonId = extractPokemonIdFromUrl(poke.url);
        return (
          <PokedexCard
            key={poke.name}
            id={pokemonId}
            name={poke.name}
            types={pokemonDetails[pokemonId]?.types}
          />
        );
      })}
    </ol>
  );
}
