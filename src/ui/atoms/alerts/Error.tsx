import { feedback } from '@services/feedback';
import MemoError from '@ui/icons/Error';

import { AlertContainer } from './AlertContainer';

export const Error = ({ children }) => (
  <AlertContainer>
    <div className="flex-shrink-0">
      <MemoError />
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-red-800">{children}</p>
    </div>
    <div className="pl-3 ml-auto">
      <div className="-mx-1.5 -my-1.5 flex items-center">
        <button
          onClick={() => {
            feedback.alert = null;
          }}
          className="inline-flex bg-white rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-600">
          <span className="sr-only">Dismiss</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </AlertContainer>
);
