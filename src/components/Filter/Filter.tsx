import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Chip } from '@mui/material';

import './Filter.scss';

export const Filter = observer(() => {
  const [categories, setCategories] = useState({
    Клавиатуры: false,
    Свичи: false,
    Инструменты: false,
    Смазка: false,
    Шумоизоляция: false,
    Кейкапы: false,
    Стабы: false,
    Базы: false,
    Корпуса: false,
    Платы: false,
  });

  return (
    <div className='filter'>
      {Object.entries(categories).map(([label, selected]) => (
        <Chip
          label={label}
          variant={selected ? 'filled' : 'outlined'}
          onClick={() => setCategories({ ...categories, [label]: !selected })}
        />
      ))}
    </div>
  );
});
