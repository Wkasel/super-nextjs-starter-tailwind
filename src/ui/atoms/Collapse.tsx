import { useRef, ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

const Collapse = ({ children, isOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const inlineStyle = isOpen ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div
      ref={ref}
      aria-hidden={!isOpen}
      style={inlineStyle}
      className="mt-2 overflow-hidden text-gray-600 duration-300 transition-height ease">
      {children}
    </div>
  );
};

export default Collapse;
