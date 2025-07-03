import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { Layout } from 'components/Layout';
import { CurrencyConverter } from './CurrencyConverter';
import { ErrorComponent } from './ErrorComponent';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <ErrorBoundary fallbackRender={ErrorComponent}>
        <CurrencyConverter />
      </ErrorBoundary>
    </Layout>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
