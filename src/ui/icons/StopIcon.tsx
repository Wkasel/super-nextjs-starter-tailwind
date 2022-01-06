import React from 'react';

function Stop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="h-5 w-5 text-red-600"
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      // className=
      // viewBox="0 0 16 16"
      viewBox="0 0 20 20"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H11C11.5523 9 12 8.55229 12 8C12 7.44772 11.5523 7 11 7H5Z"
        // fill={props.fill}
      />
    </svg>
  );
}

const MemoStop = React.memo(Stop);
export default MemoStop;
