import * as React from 'react';

function GridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="27" height="27" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2V4C17 4.55228 16.5523 5 16 5H2C1.44772 5 1 4.55228 1 4V2Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 10C1 9.44772 1.44772 9 2 9H8C8.55228 9 9 9.44772 9 10V16C9 16.5523 8.55228 17 8 17H2C1.44772 17 1 16.5523 1 16V10Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 10C13 9.44772 13.4477 9 14 9H16C16.5523 9 17 9.44772 17 10V16C17 16.5523 16.5523 17 16 17H14C13.4477 17 13 16.5523 13 16V10Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoGridIcon = React.memo(GridIcon);

export default MemoGridIcon;
