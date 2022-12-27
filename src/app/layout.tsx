import type { FC, PropsWithChildren } from 'react';
import '../styles/globals.css';

import { NavBar } from './components';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html>
    <body>
      {/* MEMO: NavBarは自動付与されたSuspenseの外側なのでローディング中も表示されている */}
      <NavBar />
      <div className="mt-6 text-center tracking-wider">
        <p>Layout - root</p>
        <p>( app/layout.tsx )</p>
      </div>
      {children}
    </body>
  </html>
);

export default RootLayout;
