import { useState } from 'react';
import Input from '../components/Input';
import styles from './App.module.scss';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertAmount = async () => {
    console.log('Implement conversion here');
  };

  return (
    <div>
      <header className={styles.header}>
        <p>Currency Converter</p>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.converterContainer}>
          <Input label="Amount" onChange={(value) => setAmount(value)} value={amount} />
          <Input label="From Currency" onChange={(value) => setFromCurrency(value)} value={fromCurrency} />
          <Input label="To Currency" onChange={(value) => setToCurrency(value)} value={toCurrency} />
          <button onClick={convertAmount}>Convert</button>
          <span>{convertedAmount}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
