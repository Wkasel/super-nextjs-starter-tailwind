import * as React from 'react';

function Success(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="h-5 w-5 text-green-400"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      {...props}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const MemoSuccess = React.memo(Success);
export default MemoSuccess;
