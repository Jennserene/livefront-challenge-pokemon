import React from "react";

interface PokemonInfoProps {
  name: string;
  id: number;
}

export function PokemonInfo({ name, id }: PokemonInfoProps) {
  return (
    <h1 className="text-3xl font-bold mt-4 capitalize text-gray-900 dark:text-gray-100">
      {name} <span className="text-gray-500 dark:text-gray-400">#{id}</span>
    </h1>
  );
}
