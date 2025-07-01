import { makeEntity } from '../testUtils';
import { makeRatesForCurrency } from './makeRatesForCurrency';
import type { Rate } from 'api/types';

export const makeRate = makeEntity<Rate>(() => ({
  base: 'EUR',
  rates: makeRatesForCurrency(),
}));
