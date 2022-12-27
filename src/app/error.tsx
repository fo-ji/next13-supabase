'use client';

const Error = ({ error }: { error: Error }) => (
  <div className="mt-6 text-center text-red-500">
    <p>Data fetching in server failed</p>
  </div>
);

export default Error;
