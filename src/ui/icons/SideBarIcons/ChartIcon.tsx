import * as React from 'react';

function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="27" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 10V9M10 10V7M14 10V5M6 18L10 14L14 18M1 1H19M2 1H18V13C18 13.5523 17.5523 14 17 14H3C2.44772 14 2 13.5523 2 13V1Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoChatIcon = React.memo(ChatIcon);

export default MemoChatIcon;
