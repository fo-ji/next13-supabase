import { NotesList } from './components';

const Page = () => (
  <main>
    <div className="m-10 text-center">
      <p>Hello World</p>
      {/* 現状、β版で公式の対応が間に合ってないので、強引に回避 */}
      {/* @ts-ignore */}
      <NotesList />
    </div>
  </main>
);

export default Page;
