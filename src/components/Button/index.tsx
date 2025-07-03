import styles from './Button.module.scss';
import type { FC } from 'react';

type Props = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button: FC<Props> = ({ isDisabled, label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};
