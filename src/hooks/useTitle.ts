import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useTitle = (): [string, Dispatch<SetStateAction<string>>] => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = `Prottey${title ? ` • ${title}` : ''}`;
  }, [title]);

  return [title, setTitle];
};
