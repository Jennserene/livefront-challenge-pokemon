import React from "react";
import { Pokedex } from "../pokedex/pokedex";

export function meta() {
  return [
    { title: "Pokédex - Pokemon Explorer" },
    { name: "description", content: "Explore information about Pokemon using the Pokédex" },
  ];
}

export default function Home() {
  return <Pokedex />;
}
