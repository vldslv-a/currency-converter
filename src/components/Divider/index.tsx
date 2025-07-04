import styles from './Divider.module.scss';
import type { FC, PropsWithChildren } from 'react';

export const Divider: FC<PropsWithChildren<{}>> = ({ children }) => {
  if (children != null) {
    return (
      <div className={`${styles.divider} ${styles.withText}`}>
        <span className={styles.text}>{children}</span>
      </div>
    );
  }

  return (
    <div className={styles.divider}>
      <div className={styles.solid} />
    </div>
  );
};
