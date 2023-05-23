import {constructorStore} from '@/stores';
import {Typography} from '@mui/material';
import {useEffect, useState} from 'react'
import {ComponentSelect} from "@/components";

import './ConstructorPage.scss';

export const ConstructorPage = () => {
  const [types, setTypes] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      await constructorStore.fetchConstructorComponents();
      setTypes([...new Set(constructorStore.components.map(({type}) => type))]);
    }
    )()
  }, []);

  return <div className="constructor-page page">
    <div className="component-list">
      {types.length ?
        types.map((type) => (
          <ComponentSelect type={type}/>
        )) :
        <Typography variant='h4'>Нет данных</Typography>}
    </div>
  </div>
}