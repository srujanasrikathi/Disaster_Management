import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Counter({ targetCount }) {
  const [count, setCount] = useState(0);

  // Set up spring animation
  const props = useSpring({
    from: { number: 0 }, // Start from 0
    to: { number: targetCount }, // Animate to the target count
    config: { duration: 2000 }, // Total animation duration (2 seconds)
  });

  // Effect to manually track count as well (if needed) 
  useEffect(() => {
    setCount(targetCount);
  }, [targetCount]);

  return (
    <div>
      {/* Animated number with interpolation */}
      <h1>
        <animated.span>
          {props.number.to(n => Math.floor(n))}
        </animated.span>
      </h1>
    </div>
  );
}

export default Counter;
