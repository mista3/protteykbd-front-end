import { useState } from 'react';

export const useImgZoom = (): [string, (e: any) => void] => {
  const [bgPos, setBgPos] = useState('0% 0%');

  const onMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBgPos(`${x}% ${y}%`);
  };

  return [bgPos, onMouseMove];
};
