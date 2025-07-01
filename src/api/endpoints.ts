import { client } from './client';
import type { ConvertResponse, CurrencyCodes, Currencies, Rate, Rates } from 'api/types';

export function convertCurrency(from: CurrencyCodes, to: CurrencyCodes, amount: number): Promise<ConvertResponse> {
  return client.get(`/convert`, {
    params: { from, to, amount },
  });
}

export function getCurrencies(): Promise<typeof Currencies> {
  return client.get(`/currencies`);
}

export function getAllRates(): Promise<Rates> {
  return client.get(`/rates`);
}

export function getRatesForCurrency(currencyCode: CurrencyCodes): Promise<Rate> {
  return client.get(`/rates/${currencyCode}`);
}
