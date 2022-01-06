import * as React from 'react';

export default function MoreInfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
        <path
          className="heroicon-ui"
          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

// const MemoBellIcon = React.memo(MoreInfoIcon);

// export default MemoBellIcon;
