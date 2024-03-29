import * as React from 'react';

function NodesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.68387 11.3419C6.88616 10.9381 7 10.4824 7 10C7 9.51763 6.88616 9.06185 6.68387 8.65807M6.68387 11.3419C6.19134 12.3251 5.17449 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.17449 7 6.19134 7.67492 6.68387 8.65807M6.68387 11.3419L13.3161 14.6581M6.68387 8.65807L13.3161 5.34193M13.3161 5.34193C13.8087 6.32508 14.8255 7 16 7C17.6569 7 19 5.65685 19 4C19 2.34315 17.6569 1 16 1C14.3431 1 13 2.34315 13 4C13 4.48237 13.1138 4.93815 13.3161 5.34193ZM13.3161 14.6581C13.1138 15.0619 13 15.5176 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.8255 13 13.8087 13.6749 13.3161 14.6581Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoNodesIcon = React.memo(NodesIcon);

export default MemoNodesIcon;
