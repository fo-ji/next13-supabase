import type { FC, PropsWithChildren } from 'react';

const ThirdLayout: FC<PropsWithChildren> = ({ children }) => (
  <main className="mt-6 text-center bg-pink-300">
    <p>Layout - 3</p>
    <p>( app/level1/level2/level3/layout.tsx )</p>
    {children}
  </main>
);

export default ThirdLayout;
