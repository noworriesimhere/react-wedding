import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { CardFace } from './flip-card.styles';

function FlipCard({ children }) {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => setFlipped((state) => !state)}>
      <CardFace
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        {children}
      </CardFace>
      <CardFace
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      />
    </div>
  );
}
export default FlipCard;
