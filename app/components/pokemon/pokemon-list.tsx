import React from "react";

import { useEffect, useState } from 'react';
import { getPokemonList } from '../../api/pokedex-api';
import type { PokemonListItem } from '../../types/pokemon';
import { LoadingSpinner } from '../ui/loading-spinner';
import { ErrorMessage } from '../ui/error-message';
import { PokemonGrid } from './pokemon-grid';

interface PokemonListProps {
  limit?: number;
  offset?: number;
}

export function PokemonList({ limit = 151, offset = 0 }: PokemonListProps) {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonData = async () => {
    try {
      setLoading(true);
      const data = await getPokemonList(limit, offset);
      setPokemonList(data.results);
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

  return <PokemonGrid pokemon={pokemonList} />;
}
