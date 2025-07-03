import { useMemo } from 'react';
import { useGetRates } from 'api/hooks/useGetRates';
import type { CurrencyCodes } from 'api/types';

type RatesEntries = Record<CurrencyCodes, string>;

const emptyRatesEntries = {} as RatesEntries;

export const useRatesEntries = () => {
  const { data, ...rest } = useGetRates();

  return useMemo(
    () =>
      ({
        ratesEntries:
          data?.reduce((acc, rate) => ({ ...acc, [rate.base]: rate.currency.symbol }), emptyRatesEntries) ??
          emptyRatesEntries,
        data,
        ...rest,
      }) as const,
    [data, rest]
  );
};
