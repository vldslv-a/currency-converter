import { makeEntity } from '../testUtils';
import type { ConvertResponse } from 'api/types';

export const makeConvertResponse = makeEntity<ConvertResponse>(() => ({
  from: 'USD',
  to: 'EUR',
  amount: 100,
  convertedAmount: 84.67601,
}));
