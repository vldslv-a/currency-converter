import { Header } from './Header';
import type { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div>
    <Header />

    {children}
  </div>
);
