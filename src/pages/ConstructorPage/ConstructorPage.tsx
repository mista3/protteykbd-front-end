import {constructorStore, itemStore} from '@/stores';
import {FormControl, InputLabel, Select, MenuItem, Typography} from '@mui/material';
import {useEffect, useState} from 'react'

import './ConstructorPage.scss';
import {ComponentEntity} from "@/entities";
import {ComponentSelect} from "@/components/ComponentSelect/ComponentSelect";

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
        {types.length?types.map((type) => (
          <ComponentSelect type={type}></ComponentSelect>
        )): <Typography variant='h4'></Typography>}
    </div>
  </div>
}