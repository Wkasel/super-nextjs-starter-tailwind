import * as React from 'react';

export default function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-mail"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <rect x={3} y={5} width={18} height={14} rx={2} />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    </div>
  );
}

// const MemoEmailIcon = React.memo(EmailIcon);
// export default MemoError;
