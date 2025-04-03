import * as PokeAPI from "pokeapi-js-wrapper";
import type { PokemonDetail, PokemonListResponse } from "../types/pokemon";

const isRunningInBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined';

const pokeApiOptions = {
  cacheImages: true,
  timeout: 5000,
};

let pokeApiClient: PokeAPI.Pokedex | null = null;
if (isRunningInBrowser) {
  pokeApiClient = new PokeAPI.Pokedex(pokeApiOptions);
}

export async function getPokemonList(limit = 20, offset = 0): Promise<PokemonListResponse> {
  if (!isRunningInBrowser || !pokeApiClient) {
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }

  try {
    return await pokeApiClient.getPokemonsList({ limit, offset }) as PokemonListResponse;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    throw error;
  }
}

export async function getPokemonDetail(idOrName: number | string): Promise<PokemonDetail> {
  if (!isRunningInBrowser || !pokeApiClient) {
    throw new Error('Pokemon API is not available on the server');
  }

  try {
    return await pokeApiClient.getPokemonByName(idOrName) as PokemonDetail;
  } catch (error) {
    console.error(`Error fetching Pokemon ${idOrName}:`, error);
    throw error;
  }
}
