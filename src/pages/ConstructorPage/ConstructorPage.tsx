import {constructorStore} from '@/stores';
import {Button, Typography} from '@mui/material';
import {useEffect, useState} from 'react'
import {ComponentSelect} from "@/components";

import './ConstructorPage.scss';

export const ConstructorPage = () => {
  const [types, setTypes] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      await constructorStore.fetchConstructorComponents();
      setTypes([...new Set(constructorStore.components.map(({type}) => type))]);
    })()
  }, []);

  return <div className="constructor-page page">
    <div className='wrapper'>
      {types.length ?
        <div className="component-list">
          {types.map((type) => (
            <ComponentSelect type={type}/>
            ))}
          <Button>Добавить в корзину</Button>
        </div> :
        <Typography variant='h4'>Нет данных</Typography>
      }
    </div>
  </div>
}