import React from "react";
import { Header } from "../components/ui/header";
import { PokemonList } from "../components/pokemon/pokemon-list";

export function Pokedex() {
  return (
    <main className="flex flex-col items-center pt-8 pb-4">
      <div className="flex-1 flex flex-col items-center gap-8 min-h-0 w-full max-w-7xl">
        <Header title="Pokédex" />
        <PokemonList limit={151} offset={0} />
      </div>
    </main>
  );
}
