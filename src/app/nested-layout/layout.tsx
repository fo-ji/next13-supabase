import type { FC, PropsWithChildren } from 'react';

const FirstLayout: FC<PropsWithChildren> = ({ children }) => (
  <main className="mt-6 text-center tracking-wider bg-gray-100">
    <p>Layout - 1</p>
    <p>( app/level1/layout.tsx )</p>
    {children}
  </main>
);

export default FirstLayout;
