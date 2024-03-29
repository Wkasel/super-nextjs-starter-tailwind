import * as React from 'react';

function PlayButtonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.7519 9.16795L9.5547 7.03647C8.89015 6.59343 8 7.06982 8 7.86852V12.1315C8 12.9302 8.89015 13.4066 9.5547 12.9635L12.7519 10.8321C13.3457 10.4362 13.3457 9.56377 12.7519 9.16795Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoPlayButtonIcon = React.memo(PlayButtonIcon);

export default MemoPlayButtonIcon;
