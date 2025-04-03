import React from "react";
import { Link } from 'react-router';

interface ButtonProps {
  children: React.ReactNode;
  classOverrides?: string;
  to: string;
}

export function Button({
  children,
  to,
  classOverrides = ''
}: ButtonProps) {
  const baseClasses = 'rounded font-medium transition-colors inline-block bg-blue-500 text-white hover:bg-blue-600 px-4 py-2';
  const combinedClasses = `${baseClasses} ${classOverrides}`;

  return (
    <Link
      to={to}
      className={combinedClasses}
    >
      {children}
    </Link>
  );
}
