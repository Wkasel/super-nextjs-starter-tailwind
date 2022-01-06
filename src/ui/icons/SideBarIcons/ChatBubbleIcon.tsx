import * as React from 'react';

function ChatBubbleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="27" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 5H15M5 9H9M10 17L6 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H17C18.1046 1 19 1.89543 19 3V11C19 12.1046 18.1046 13 17 13H14L10 17Z"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoChatBubbleIcon = React.memo(ChatBubbleIcon);

export default MemoChatBubbleIcon;
