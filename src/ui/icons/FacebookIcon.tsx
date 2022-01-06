import * as React from 'react';

import clsx from 'clsx';

function SvgFacebookIcon({ className, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="inline">
      <span className="sr-only">Facebook</span>
      <svg className={clsx('w-6 h-6', className)} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...rest}>
        <path
          fill="currentcolor"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        />
      </svg>
    </div>
  );
}

export default SvgFacebookIcon;
