import React from "react";
import { Header } from "../components/ui/header";
import { PokedexList } from "./pokedex-list";

export function Pokedex() {
  return (
    <main className="flex flex-col items-center pt-8 pb-4">
      <div className="flex-1 flex flex-col items-center gap-8 min-h-0 w-full max-w-7xl">
        <Header title="Pokédex" />
        <PokedexList limit={151} offset={0} />
      </div>
    </main>
  );
}
