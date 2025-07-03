import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useCallback, useState } from 'react';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Layout } from 'components/Layout';
import styles from './App.module.scss';

const queryClient = new QueryClient();

export const App = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertAmount = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('Implement conversion here');

    setConvertedAmount('');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <div className={styles.converterContainer}>
          <Input id="amount" label="Amount" onChange={setAmount} value={amount} />

          <div className={styles.currencyInputsContainer}>
            <Input id="fromCurrency" label="From Currency" onChange={setFromCurrency} value={fromCurrency} />

            <Input id="toCurrency" label="To Currency" onChange={setToCurrency} value={toCurrency} />
          </div>

          <Button onClick={convertAmount} label="Convert" />

          <span>{convertedAmount}</span>
        </div>
      </Layout>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
