import type { FC, PropsWithChildren } from 'react';

const SecondLayout: FC<PropsWithChildren> = ({ children }) => (
  <main className="mt-6 text-center tracking-wider bg-indigo-100">
    <p>Layout - 2</p>
    <p>( app/level1/level2/layout.tsx )</p>
    {children}
  </main>
);

export default SecondLayout;
