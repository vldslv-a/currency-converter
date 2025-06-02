import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
  label?: string;
  onChange: (val: string) => void;
  value?: string;
};

const Input: React.FC<InputProps> = ({ label, onChange, value }) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} onChange={(e) => onChange(e.target.value)} value={value} />
    </div>
  );
};

export default Input;
