import { api } from '@/services'
import { constructorStore } from '@/stores';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useEffect } from 'react'

import './ConstructorPage.scss';

export const ConstructorPage = () => {
  useEffect(() => {
    api.getConstructor()
  }, []);

  return <div className="constructor-page page">
    <div className="component-list">
      <FormControl fullWidth>
        <InputLabel>База</InputLabel>
        <Select
          value={constructorStore.case}
          onChange={(e)=>constructorStore.setCase(e.target.value)}
        >
          <MenuItem value={10}>Tester68</MenuItem>
          <MenuItem value={20}>GMK67</MenuItem>
          <MenuItem value={30}>Gas67</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Свичи</InputLabel>
        <Select
          value={constructorStore.case}
          onChange={(e)=>constructorStore.setCase(e.target.value)}
        >
          <MenuItem value={10}>Tester68</MenuItem>
          <MenuItem value={20}>GMK67</MenuItem>
          <MenuItem value={30}>Gas67</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Кейкапы</InputLabel>
        <Select
          value={constructorStore.case}
          onChange={(e)=>constructorStore.setCase(e.target.value)}
        >
          <MenuItem value={10}>Tester68</MenuItem>
          <MenuItem value={20}>GMK67</MenuItem>
          <MenuItem value={30}>Gas67</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Стабилизаторы</InputLabel>
        <Select
          value={constructorStore.case}
          onChange={(e)=>constructorStore.setCase(e.target.value)}
        >
          <MenuItem value={10}>Tester68</MenuItem>
          <MenuItem value={20}>GMK67</MenuItem>
          <MenuItem value={30}>Gas67</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Кабель</InputLabel>
        <Select
          value={constructorStore.case}
          onChange={(e)=>constructorStore.setCase(e.target.value)}
        >
          <MenuItem value={10}>Tester68</MenuItem>
          <MenuItem value={20}>GMK67</MenuItem>
          <MenuItem value={30}>Gas67</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Ноб</InputLabel>
        <Select
          value={constructorStore.case}
          onChange={(e)=>constructorStore.setCase(e.target.value)}
        >
          <MenuItem value={10}>Tester68</MenuItem>
          <MenuItem value={20}>GMK67</MenuItem>
          <MenuItem value={30}>Gas67</MenuItem>
        </Select>
      </FormControl>
    </div>
  </div>
}