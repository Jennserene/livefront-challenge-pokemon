import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: React.ReactEventHandler<HTMLImageElement>;
}

export function Image({ src, alt, className = '', onError }: ImageProps) {
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
