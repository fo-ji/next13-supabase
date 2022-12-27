import { Suspense } from 'react';

import { NotesList, Spinner } from './components';
import TimerCounter from './components/TimerCounter';

const Page = () => (
  <main>
    <div className="m-10 text-center">
      <p>Hello World</p>
      <Suspense fallback={<Spinner color="border-green-500" />}>
        {/* 現状、β版で公式の対応が間に合ってないので、強引に回避 */}
        {/* @ts-ignore */}
        <NotesList />
      </Suspense>
      <TimerCounter />
    </div>
  </main>
);

export default Page;
