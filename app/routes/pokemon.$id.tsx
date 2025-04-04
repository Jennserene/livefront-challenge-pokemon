import React from "react";
import { Pokemon } from "../components/pokemon/pokemon";

export function meta({ params }: { params: { id: string } }) {
  return [
    { title: `Pokemon #${params.id} Details` },
    { name: "description", content: `Detailed information about Pokemon #${params.id}` },
  ];
}

export default function PokemonDetail() {
  return <Pokemon />;
}
