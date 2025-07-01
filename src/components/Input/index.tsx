import { useCallback } from 'react';
import styles from './Input.module.scss';
import type { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type NativeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = Omit<NativeInputProps, 'onChange'> & {
  id: string;
  label?: string;
  onChange: (value: string) => void;
  value?: string;
};

export const Input: React.FC<Props> = ({ id, label, onChange, ...props }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <input {...props} id={id} className={styles.input} onChange={handleChange} />
    </div>
  );
};
