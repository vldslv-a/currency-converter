import { createGetHandler } from './createHttpHandlers';
import type { ConvertResponse, Currencies, CurrencyCodes, Rate, Rates } from 'api/types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const convertCurrencyHandler = createGetHandler<ConvertResponse>(`${API_BASE_URL}/convert`);

export const getCurrenciesHandler = createGetHandler<typeof Currencies>(`${API_BASE_URL}/currencies`);

export const getAllRatesHandler = createGetHandler<Rates>(`${API_BASE_URL}/rates`);

export const getRatesForCurrencyHandler = (currencyCode: CurrencyCodes) =>
  createGetHandler<Rate>(`${API_BASE_URL}/rates/${currencyCode}`);
