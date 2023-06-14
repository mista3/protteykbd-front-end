import {FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {constructorStore} from "@/stores";
import { Image } from 'antd';
import './ComponentSelect.scss';

export const ComponentSelect = ({
  type,
}: {
    type: string;
}) => {
  return(
    <FormControl fullWidth>
      <InputLabel>{type}</InputLabel>
        <Select
          value={''}
          onChange={(e) => constructorStore.setCase(e.target.value)}
          label={type}
        >
        {constructorStore.components.length ?
          constructorStore.components
            .filter((comp) => comp.type == type)
            .map(({ id, name }) =>
              <MenuItem value={id} className='select-item'>
                <Image
                  src={`https://ik.imagekit.io/xiultnofr/tr:h-64,w-64/component/${id}.jpg`}
                  preview={false}
                  className='img'
                />
                <Typography>{name}</Typography>
            </MenuItem>) :
          null}
        </Select>
    </FormControl>
  )
}