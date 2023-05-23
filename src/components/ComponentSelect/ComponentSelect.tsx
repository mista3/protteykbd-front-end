import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {constructorStore} from "@/stores";

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
            .map(({ id, name }) => <MenuItem value={id}>{name}</MenuItem>) :
          null}
        </Select>
    </FormControl>
  )
}