import styles from './Main.module.scss';
import type { PropsWithChildren } from 'react';

export const Main: React.FC<PropsWithChildren<{}>> = ({ children }) => <main className={styles.main}>{children}</main>;
