import { useCallback } from 'react';
import styles from './Select.module.scss';
import type { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes } from 'react';

type Option<T = string> = {
  value: T;
  label: string;
  disabled?: boolean;
};

type NativeSelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

type Props<T = string> = Omit<NativeSelectProps, 'onChange'> & {
  id: string;
  label?: string;
  options: Option<T>[];
  value?: T;
  onChange: (value: T) => void;
};

export const Select = <T extends number | string = string>({
  id,
  label,
  onChange,
  options,
  value,
  ...props
}: Props<T>) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const typedValue = options.find((option) => String(option.value) === e.target.value)?.value;

      if (typedValue == null) {
        return;
      }

      onChange(typedValue);
    },
    [onChange, options]
  );

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        className={styles.select}
        value={value !== undefined ? String(value) : ''}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={String(option.value)} value={String(option.value)} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
