import React from 'react';
import styles from './Button.module.scss';

type Props = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
};

const Button: React.FC<Props> = ({ label, onClick, isDisabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
