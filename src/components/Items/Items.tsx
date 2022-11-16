import { ItemCard } from '@/components';
import { itemStore } from '@/stores';
import { Chip } from '@mui/material';
import { useState } from 'react';

import './Items.scss';

export const Items = () => {
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
    <>
      <div className='chips'>
        {Object.entries(categories).map(([label, selected]) => (
          <Chip
            label={label}
            variant={selected ? 'filled' : 'outlined'}
            onClick={() => setCategories({ ...categories, [label]: !selected })}
          />
        ))}
      </div>
      <div className='items'>
        {itemStore.items.map((item) => (
          <ItemCard key={Math.random()} {...item} />
        ))}
      </div>
    </>
  );
};
