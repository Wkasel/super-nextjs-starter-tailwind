import * as React from 'react';

function ThumbsUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 8.5C0 7.67157 0.671573 7 1.5 7C2.32843 7 3 7.67157 3 8.5V14.5C3 15.3284 2.32843 16 1.5 16C0.671573 16 0 15.3284 0 14.5V8.5Z"
        fill="white"
      />
      <path
        d="M4 8.33333V13.7639C4 14.5215 4.428 15.214 5.10557 15.5528L5.15542 15.5777C5.71084 15.8554 6.32329 16 6.94427 16H12.3604C13.3138 16 14.1346 15.3271 14.3216 14.3922L15.5216 8.39223C15.7691 7.15465 14.8225 6 13.5604 6H10V2C10 0.895431 9.10457 0 8 0C7.44772 0 7 0.447715 7 1V1.66667C7 2.53215 6.71929 3.37428 6.2 4.06667L4.8 5.93333C4.28071 6.62572 4 7.46785 4 8.33333Z"
        fill="white"
      />
    </svg>
  );
}

const MemoThumbsUp = React.memo(ThumbsUp);
export default MemoThumbsUp;
