import type { FallbackProps } from 'react-error-boundary';

export const ErrorComponent = ({ error }: FallbackProps) => (
  <div>
    <h2>Something went wrong:</h2>
    <pre>{JSON.stringify(error)}</pre>
  </div>
);
