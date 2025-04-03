export function capitalizeFirstLetter(inputString: string): string {
  if (!inputString) return '';
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

export function extractPokemonIdFromUrl(pokemonApiUrl: string): string {
  if (!pokemonApiUrl) return '';

  const normalizedUrl = pokemonApiUrl.endsWith('/')
    ? pokemonApiUrl.slice(0, -1)
    : pokemonApiUrl;

  const urlSegments = normalizedUrl.split('/');
  return urlSegments[urlSegments.length - 1];
}

export function getPokemonImageUrl(pokemonId: string | number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
}

export function getFallbackPokemonImageUrl(pokemonId: string | number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
}
