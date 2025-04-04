import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemonDetail } from "../../api/pokedex-api";
import type { PokemonDetail } from "../../types/pokemon";
import { LoadingSpinner } from "../ui/loading-spinner";
import { ErrorMessage } from "../ui/error-message";
import { Button } from "../ui/button";
import { PokemonImage } from "./pokemon-image";
import { PokemonInfo } from "./pokemon-info";
import { PokemonTypes } from "./pokemon-types";
import { PokemonAbilities } from "./pokemon-abilities";
import { PokemonStats } from "./pokemon-stats";
import { PokemonDetails } from "./pokemon-details";
import { getPokemonImageUrl, getFallbackPokemonImageUrl } from "../../utils/string";

export function Pokemon() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonDetails = async () => {
    if (!id) return;

    try {
      setLoading(true);
      const data = await getPokemonDetail(id);
      setPokemonData(data);
    } catch (err) {
      setError("Failed to load Pokemon details. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isRunningInBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined';
    if (!isRunningInBrowser || !id) return;

    fetchPokemonDetails();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !pokemonData) {
    return (
      <ErrorMessage
        message={error || "Pokemon not found"}
        backLink="/"
        backLinkText="Back to List"
      />
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Button
        to="/"
        classOverrides="mb-6"
      >
        &larr; Back to List
      </Button>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex flex-col items-center">
            <PokemonImage
              src={getPokemonImageUrl(pokemonData.id)}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== pokemonData.sprites.front_default) {
                  target.src = pokemonData.sprites.front_default || getFallbackPokemonImageUrl(pokemonData.id);
                }
              }}
              alt={pokemonData.name}
              className="w-64 h-64"
            />
            <PokemonInfo name={pokemonData.name} id={pokemonData.id} />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PokemonDetails
                height={pokemonData.height}
                weight={pokemonData.weight}
                baseExperience={pokemonData.base_experience}
              />
              <PokemonTypes types={pokemonData.types} />
              <PokemonAbilities abilities={pokemonData.abilities} />
              <PokemonStats stats={pokemonData.stats} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
