import * as React from 'react';

function LightningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="27" height="30" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 8V1L1 12H8L8 19L17 8L10 8Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoLightningIcon = React.memo(LightningIcon);

export default MemoLightningIcon;
