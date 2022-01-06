import * as React from 'react';

export default function AccountIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="inline">
      <span className="sr-only">Account</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-compass"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <polyline points="8 16 10 10 16 8 14 14 8 16" />
        <circle cx={12} cy={12} r={9} />
      </svg>
    </div>
  );
}

// const MemoAccountIcon = React.memo(AccountIcon);
// export default MemoAccountIcon;
