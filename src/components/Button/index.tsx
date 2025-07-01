import React from 'react';
import styles from './Button.module.scss';

type Props = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button: React.FC<Props> = ({ isDisabled, label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};
