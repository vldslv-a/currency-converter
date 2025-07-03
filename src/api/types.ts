export enum Currencies {
  AUD = 'Australian Dollar',
  CAD = 'Canadian Dollar',
  CHF = 'Swiss Franc',
  CNY = 'Chinese Yuan',
  EUR = 'Euro',
  GBP = 'British Pound Sterling',
  THB = 'Thai Baht',
  USD = 'United States Dollar',
}

export type CurrencyCodes = keyof typeof Currencies;

export type RatesForCurrency = Record<CurrencyCodes, number>;

type Currency = {
  flag: string;
  name: string;
  symbol: string;
};

export type Rate = {
  base: keyof typeof Currencies;
  currency: Currency;
  rates: RatesForCurrency;
};

export type Rates = Rate[];

export type ConvertResponse = {
  from: keyof typeof Currencies;
  to: keyof typeof Currencies;
  amount: number;
  convertedAmount: number;
};
