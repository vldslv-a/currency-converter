import styles from './Table.module.scss';
import type { ReactNode } from 'react';

type TableColumn<T, K extends keyof T> = {
  key: K;
  header: string;
  render?: (value: T[K], row: T) => ReactNode;
};

type Column<T> = { [K in keyof T]: TableColumn<T, K> }[keyof T];

type TableProps<T> = {
  className?: string;
  columns: Column<T>[];
  data: T[];
};

const renderCellValue = (value: unknown): string => {
  if (typeof value === 'string' || typeof value === 'number') {
    return String(value);
  }

  return '';
};

export const Table = <T extends Record<string, unknown>>({ className, columns, data }: TableProps<T>) => (
  <div className={`${styles.tableContainer} ${className ?? ''}`}>
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)} className={styles.th}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {data.map((row, index) => (
          <tr key={index} className={styles.tr}>
            {columns.map((column) => (
              <td key={String(column.key)} className={styles.td}>
                {column.render ? column.render(row[column.key], row) : renderCellValue(row[column.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
