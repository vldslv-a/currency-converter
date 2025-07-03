import { useQuery } from '@tanstack/react-query';
import { convertCurrency } from 'api/endpoints';
import type { CurrencyCodes } from 'api/types';

export const useConvertCurrencyQuery = (fromCurrency: CurrencyCodes, toCurrency: CurrencyCodes, amount: number) =>
  useQuery({
    queryKey: ['currencies', { fromCurrency, toCurrency, amount }],
    queryFn: () => convertCurrency(fromCurrency, toCurrency, amount),
    enabled: false,
    retry: false,
  });
