import styles from './Header.module.scss';
import type { FC } from 'react';

export const Header: FC = () => (
  <header className={styles.header}>
    <p>Currency Converter</p>
  </header>
);
