import * as React from 'react';

function AddFriendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 7V10M16 10V13M16 10H19M16 10H13M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5ZM1 18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19H1V18Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoAddFriendIcon = React.memo(AddFriendIcon);

export default MemoAddFriendIcon;
