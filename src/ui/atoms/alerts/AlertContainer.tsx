import { useSpring, animated } from 'react-spring';

export const AlertContainer = ({ children }) => {
  const props = useSpring({
    from: { top: -80 },
    to: { top: 20 },
  });
  return (
    <div className="flex justify-center">
      {/* @ts-ignore */}
      <animated.div className="absolute z-50" style={props}>
        <div className="p-4 bg-white rounded-md shadow-lg w-128">
          <div className="flex items-center">{children}</div>
        </div>
      </animated.div>
    </div>
  );
};
