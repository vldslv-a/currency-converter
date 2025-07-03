import { useEffect, useMemo, useState } from 'react';
import { useConvertCurrencyQuery } from 'api/hooks/useConvertCurrencyQuery';
import { Currencies } from 'api/types';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useRatesEntries } from 'hooks/useRatesEntries';
import { bankingRound } from 'utils/bankingRound';
import { entries } from 'utils/entries';
import { ConversionResult } from './ConversionResult';
import styles from './CurrencyConverter.module.scss';
import type { CurrencyCodes } from 'api/types';

const validCurrencies = entries(Currencies).map(([key]) => key);

const validateCurrency = (currency: string): boolean => validCurrencies.find((c) => c === currency) !== undefined;

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [isValid, setIsValid] = useState(true);

  const { error: errorRatesEntries, ratesEntries } = useRatesEntries();

  const {
    data,
    error,
    refetch: convertAmount,
  } = useConvertCurrencyQuery(fromCurrency as CurrencyCodes, toCurrency as CurrencyCodes, Number(amount));

  const roundedAmount = useMemo(() => {
    if (data?.convertedAmount == undefined) {
      return 0;
    }

    return bankingRound(data.convertedAmount, 2);
  }, [data?.convertedAmount]);

  useEffect(() => {
    if (amount === '' || fromCurrency === '' || toCurrency === '') {
      return;
    }

    const isAmountValid = !isNaN(Number(amount)) && Number(amount) > 0;
    const isFromCurrencyValid = validateCurrency(fromCurrency);
    const isToCurrencyValid = validateCurrency(toCurrency);

    setIsValid(isAmountValid && isFromCurrencyValid && isToCurrencyValid);
  }, [amount, fromCurrency, toCurrency]);

  if (error || errorRatesEntries) {
    throw error ?? errorRatesEntries ?? new Error('An error occurred while fetching data');
  }

  const currencySymbol = data?.to ? ratesEntries[data.to] : '';

  return (
    <div className={styles.currencyConverter} data-testid="currencyConverter">
      <Input id="amount" label="Amount" onChange={setAmount} value={amount} />

      <div className={styles.currencyInputsContainer}>
        <Input id="fromCurrency" label="From Currency" onChange={setFromCurrency} value={fromCurrency} />

        <Input id="toCurrency" label="To Currency" onChange={setToCurrency} value={toCurrency} />
      </div>

      <Button onClick={convertAmount} label="Convert" isDisabled={!isValid} />

      {Boolean(roundedAmount) && (
        <ConversionResult>
          {currencySymbol} {roundedAmount}
        </ConversionResult>
      )}
    </div>
  );
};
