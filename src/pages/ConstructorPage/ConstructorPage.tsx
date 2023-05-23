import {constructorStore, itemStore} from '@/stores';
import {FormControl, InputLabel, Select, MenuItem, Typography} from '@mui/material';
import { useEffect } from 'react'

import './ConstructorPage.scss';

export const ConstructorPage = () => {
  let types: any[] = [];
  useEffect(() => {
    (async () => {
      await constructorStore.fetchConstructorComponents();
      console.log(constructorStore.components);
      types = [...new Set(constructorStore.components)];
      console.log(types);
    }
    )()
  }, []);
  return <div className="constructor-page page">
    <div className="component-list">
      <FormControl fullWidth>
        {types.length?types.map((type) => (
            <>
            {constructorStore.components.length?constructorStore.components.map((component) => (
            <>
              <InputLabel>{type}</InputLabel>
              <Select
                value={constructorStore.case}
                onChange={(e)=>constructorStore.setCase(e.target.value)}
              >
              <MenuItem value={10}>Tester68</MenuItem>
              </Select>
            </>
        )): <></>}
            </>
        )): <Typography variant='h4'>Нет данных</Typography>}
      </FormControl>
    </div>
  </div>
}