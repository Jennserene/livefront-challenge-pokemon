import React from "react";
import { Link } from 'react-router';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  backLink?: string;
  backLinkText?: string;
}

export function ErrorMessage({
  message,
  onRetry,
  backLink,
  backLinkText = 'Back to List'
}: ErrorMessageProps) {
  return (
    <div className="text-center p-4 text-red-500">
      <p>{message}</p>

      <div className="mt-4 flex gap-4 justify-center">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        )}

        {backLink && (
          <Link
            to={backLink}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block"
          >
            {backLinkText}
          </Link>
        )}
      </div>
    </div>
  );
}
