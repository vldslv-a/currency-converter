import styles from './ConversionResult.module.scss';
import type { FC, PropsWithChildren } from 'react';

export const ConversionResult: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className={styles.conversionResult}>
    <span>{children}</span>
  </div>
);
