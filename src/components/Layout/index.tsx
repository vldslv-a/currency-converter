import { Header } from './Header';
import { Main } from './Main';
import type { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div>
    <Header />

    <Main>{children}</Main>
  </div>
);
