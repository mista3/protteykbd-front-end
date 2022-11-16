import { useEffect, useState } from 'react';

export const useTitle = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = `ProtteyKBD${title ? ` / ${title}` : ''}`;
  }, [title]);

  return { title, setTitle };
};
