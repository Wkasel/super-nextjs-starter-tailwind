import * as React from 'react';

function Waiting(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="w-5 h-5 text-yellow-300"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      {...props}>
      <path
        fillRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12ZM8 3C7.44772 3 7 3.44772 7 4V8C7 8.55228 7.44772 9 8 9C8.55229 9 9 8.55228 9 8V4C9 3.44772 8.55229 3 8 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const MemoWaiting = React.memo(Waiting);
export default MemoWaiting;
