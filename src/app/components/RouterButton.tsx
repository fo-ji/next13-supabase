'use client';

import { useRouter } from 'next/navigation';

const RouterButton = ({ destination = '' }: { destination?: string }) => {
  const router = useRouter();

  return (
    <button
      className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
      onClick={() => {
        // MEMO: soft-navigation(ブラウザキャッシュを利用)
        router.push(`/${destination}`);
      }}
    >
      Nav to {destination ? destination : 'home'}
    </button>
  );
};

export default RouterButton;
