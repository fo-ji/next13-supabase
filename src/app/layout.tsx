import type { FC, PropsWithChildren } from 'react';
import '../styles/globals.css';

import { NavBar } from './components';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html>
    <body>
      <NavBar />
      {children}
    </body>
  </html>
);

export default RootLayout;
