import React from "react";

interface PokemonDetailsProps {
  height: number;
  weight: number;
  baseExperience: number;
}

export function PokemonDetails({ height, weight, baseExperience }: PokemonDetailsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Details</h2>
      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
        <li><span className="font-medium">Height:</span> {height / 10}m</li>
        <li><span className="font-medium">Weight:</span> {weight / 10}kg</li>
        <li><span className="font-medium">Base Experience:</span> {baseExperience}</li>
      </ul>
    </div>
  );
}
