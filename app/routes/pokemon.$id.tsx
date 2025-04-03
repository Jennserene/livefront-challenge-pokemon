import React from "react";
import { PokemonDetailView } from "../components/pokemon/pokemon-detail-view";

export function meta({ params }: { params: { id: string } }) {
  return [
    { title: `Pokemon #${params.id} Details` },
    { name: "description", content: `Detailed information about Pokemon #${params.id}` },
  ];
}

export default function PokemonDetail() {
  return <PokemonDetailView />;
}
