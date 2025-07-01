import { makeEntity } from '../testUtils';
import type { RatesForCurrency } from 'api/types';

export const makeRatesForCurrency = makeEntity<RatesForCurrency>(() => ({
  AUD: 1.5990123,
  CAD: 1.4809536,
  CHF: 1.0816638,
  CNY: 7.6563507,
  EUR: 1,
  GBP: 0.85391377,
  THB: 38.87968,
  USD: 1.181051,
}));
