import React from "react";
import pokemonLogo from "./International_Pokémon_logo.svg";

interface HeaderProps {
  title?: string;
}

export function Header({ title = 'Pokédex' }: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4">
      <div className="w-[300px] max-w-[100vw] p-4">
        <img
          src={pokemonLogo}
          alt="International Pokemon Logo"
          className="block w-full"
        />
      </div>
      {title && <h1 className="text-3xl font-bold">{title}</h1>}
    </header>
  );
}
