import type { FC, PropsWithChildren } from 'react';
import { BlogListStatic } from '../components';
import RefreshButton from '../components/RefreshButton';

const BlogLayout: FC<PropsWithChildren> = ({ children }) => (
  <section className="flex">
    <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
      {/*@ts-ignore*/}
      <BlogListStatic />
      <div className="flex justify-center">
        <RefreshButton />
      </div>
    </aside>
    <main className="flex flex-1 justify-center">{children}</main>
  </section>
);

export default BlogLayout;
