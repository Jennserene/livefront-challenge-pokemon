import React from "react";

import { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetail } from '../api/pokedex-api';
import type { PokemonListItem, PokemonDetail } from '../types/pokemon';
import { LoadingSpinner } from '../components/ui/loading-spinner';
import { ErrorMessage } from '../components/ui/error-message';
import { PokedexGrid } from './pokedex-grid';

interface PokedexListProps {
  limit?: number;
  offset?: number;
}

export function PokedexList({ limit = 151, offset = 0 }: PokedexListProps) {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<Record<string, PokemonDetail>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonData = async () => {
    try {
      setLoading(true);
      const data = await getPokemonList(limit, offset);
      setPokemonList(data.results);

      const details: Record<string, PokemonDetail> = {};
      await Promise.all(
        data.results.map(async (pokemon) => {
          const id = pokemon.url.split('/').filter(Boolean).pop() || '';
          try {
            const pokemonDetail = await getPokemonDetail(id);
            details[id] = pokemonDetail;
          } catch (error) {
            console.error(`Error fetching details for Pokemon ${id}:`, error);
          }
        })
      );
      setPokemonDetails(details);
    } catch (err) {
      setError("Failed to load Pokemon. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isRunningInBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined';
    if (!isRunningInBrowser) return;

    fetchPokemonData();
  }, [limit, offset]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchPokemonData} />;
  }

  return <PokedexGrid pokemon={pokemonList} pokemonDetails={pokemonDetails} />;
}
