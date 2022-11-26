import { ReactNode, useRef, useState } from 'react';

import './SteamCardWrapper.scss';

export const SteamCardWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [brightness, setBrightness] = useState<number>();

  const map = (val: number, minA: number, maxA: number, minB: number, maxB: number) =>
    minB + ((val - minA) * (maxB - minB)) / (maxA - minA);

  const onMouseMove = (e: any) => {
    if (!ref.current) return;
    const localX = e.clientX - ref.current.offsetLeft;
    const localY = e.clientY - ref.current.offsetTop;
    setRotateX(map(localY, 0, 387, 2, -2));
    setRotateY(map(localX, 0, 320, -2, 2));
    setBrightness(map(localY, 0, 387, 1.1, 0.9));
  };
  
  const onMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setBrightness(1);  
  }

  return (
    <div className='steam-card-wrapper' onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} ref={ref}>
      <div style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, filter: `brightness(${brightness})` }}>
        {children}
      </div>
    </div>
  );
};
