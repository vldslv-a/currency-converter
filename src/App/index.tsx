import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Layout } from 'components/Layout';
import { CurrencyConverter } from './CurrencyConverter';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <CurrencyConverter />
    </Layout>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
