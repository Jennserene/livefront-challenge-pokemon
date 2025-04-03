import React from 'react';

interface PokemonImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: React.ReactEventHandler<HTMLImageElement>;
}

export function PokemonImage({ src, alt, className = '', onError }: PokemonImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
      loading="lazy"
      onError={onError}
    />
  );
}
